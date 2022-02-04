import Location from "./models/Location";
import PartnerParser from "./PartnerParser";
import DistanceCalculator from "./DistanceCalculator";
import Invitee from "./models/Invitee";

export default class Inviter {
  constructor(private baseLocation: Location, private filePath: string) {
  }

  getInvitationList = async (): Promise<Invitee[]> => {
    const invitees: Invitee[] = [];

    try {
      const partners = await PartnerParser.getPartnersFromFile(this.filePath);

      for (const partner of partners) {
        const distance = DistanceCalculator.getDistanceBetweenLocations(this.baseLocation, partner);

        if (distance <= 100) {
          invitees.push(new Invitee(partner.id, partner.name));
        }
      }
    } catch (err) {
      console.log(`Failed to obtain invitation list: ${err.message}`)
    }

    return invitees;
  }

  getSortedInvitationList = async () => {
    const invitationList = await this.getInvitationList();
    return this.sortInviteesById(invitationList);
  }

  sortInviteesById = (invitees: Invitee[]): Invitee[] => {
    return invitees.sort((a, b) => a.id - b.id);
  }
}
