import Location from './models/Location'
import Inviter from "./Inviter";
import * as fs from "fs";

const psiOffice = new Location(42.6665921, 23.351723);
const inviter = new Inviter(psiOffice, './input/partners.txt');

inviter.getSortedInvitationList()
  .then(invitationList => {
    if (invitationList && invitationList.length) {
      const outDirName = 'output';
      const stringData = invitationList.map(invitee => JSON.stringify(invitee));

      if (!fs.existsSync(outDirName)) fs.mkdirSync(outDirName);
      fs.writeFileSync(`${outDirName}/invitation_list.txt`, stringData.join('\n'));
    }
    console.log(invitationList);
  })
  .catch(err => console.log(err));


