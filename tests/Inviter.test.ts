import Location from "../src/models/Location";
import Inviter from "../src/Inviter";
import Invitee from "../src/models/Invitee";

const filePath = './tests/input/test_data.txt';
const location = new Location(42.6665921, 23.351723);
const inviter = new Inviter(location, filePath);

describe('Inviter', () => {
  describe('getInvitationList', () => {
    it('should get the invitation list from the provided file', async function () {
      const sortedList = await inviter.getInvitationList();
      const expected: Invitee[] = [
          new Invitee(12, 'Bluebell Robles'),
          new Invitee(1, 'Jamelia Waller'),
          new Invitee(3, 'Gracie-Leigh Mccallum'),
          new Invitee(28, 'Romy Harrison'),
          new Invitee(8, 'Ffion Firth')
        ]
      ;
      expect(sortedList).toEqual(expected);
    });
  });

  describe('getSortedInvitationList', () => {
    it('should return the invitation list, sorted it by id', async function () {
      const sortedList = await inviter.getSortedInvitationList();
      const expected: Invitee[] = [
        new Invitee(1, 'Jamelia Waller'),
        new Invitee(3, 'Gracie-Leigh Mccallum'),
        new Invitee(8, 'Ffion Firth'),
        new Invitee(12, 'Bluebell Robles'),
        new Invitee(28, 'Romy Harrison')
      ];
      expect(sortedList).toEqual(expected);
    });
  });

  describe('sortInviteesById', () => {
    it('should return the passed array sorted by id', function () {
      const john = new Invitee(1, 'John');
      const luiza = new Invitee(2, 'Luiza');
      const emma = new Invitee(3, 'Emma');
      const peter = new Invitee(4, 'Peter');
      const invitees = [peter, emma, john, luiza];
      const expected = [john, luiza, emma, peter];

      expect(inviter.sortInviteesById(invitees)).toEqual(expected);
    });
  });
})
