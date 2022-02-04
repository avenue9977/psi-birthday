import {createReadStream} from 'fs';
import {once} from 'events';
import {createInterface} from 'readline';
import Partner from "./models/Partner";


class PartnerParser {
  createPartnerFromString = (line: string): Partner | null => {
    try {
      const {partner_id, name, latitude, longitude} = JSON.parse(line);

      if (!partner_id && !name && !latitude && !longitude) return null;

      return new Partner(partner_id, name, latitude, longitude);
    } catch (err) {
      console.log(`Failed to create Partner with the provided input: ${err.message}\nInput: ${line}\n`);
      return null;
    }
  }

  getPartnersFromFile = async (filePath: string): Promise<Partner[]> => {
    const partners: Partner[] = [];

    try {
      const readLine = createInterface({
        input: createReadStream(filePath),
        crlfDelay: Infinity
      });

      // Register listener for processing line by line
      readLine.on('line', (line) => {
        const partner = this.createPartnerFromString(line);
        if (partner) partners.push(partner);
      });

      // Wait till the whole file is processed
      await once(readLine, 'close');
    } catch (err) {
      console.log(`Error while parsing the provided file: ${err.message}`);
    }

    return partners;
  }
}

export default new PartnerParser()
