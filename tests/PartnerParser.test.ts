import PartnerParser from "../src/PartnerParser";
import Partner from "../src/models/Partner";

describe('PartnerParser', () => {
  describe('createPartnerFromLine', () => {
    describe('when correct data is provided', () => {
      it('should return a Partner instance', function () {
        const line = '{"latitude": "42.7034111", "partner_id": 1, "name": "Jamelia Waller", "longitude": "23.4862259"}';
        expect(PartnerParser.createPartnerFromString(line)).toBeInstanceOf(Partner);
      });
    });

    describe('when not deserializable string is provided', () => {
      it('should log the error and return null', function () {
        const str = '{"latitude": "42.7034111", "partner_id": 1, "name": "Jamelia Waller", "longitude": "23.4862259"';
        expect(PartnerParser.createPartnerFromString(str)).toBeNull();
      });
    });

    describe('when empty object is provided', () => {
      it('should return null', function () {
        const str = '{}';
        expect(PartnerParser.createPartnerFromString(str)).toBeNull();
      });
    });
  });

  describe('getPartnersFromFile', () => {
    describe('when correct file is provided', () => {
      it('should return partners array', async function () {
        const filePath = 'tests/input/test_data.txt';
        const partners = await PartnerParser.getPartnersFromFile(filePath);
        const expected = [{
          "id": 12,
          "lat": "42.6661417",
          "latitudeRadians": 0.7446646517874507,
          "long": "23.293435",
          "longitudeRadians": 0.40654713484928534,
          "name": "Bluebell Robles"
        }, {
          "id": 1,
          "lat": "42.7034111",
          "latitudeRadians": 0.7453151255276934,
          "long": "23.4862259",
          "longitudeRadians": 0.4099119708221685,
          "name": "Jamelia Waller"
        }, {
          "id": 2,
          "lat": "42.1268151",
          "latitudeRadians": 0.7352516268738643,
          "long": "24.7234766",
          "longitudeRadians": 0.43150606920977314,
          "name": "Devon Mac"
        }, {
          "id": 3,
          "lat": "42.6264989",
          "latitudeRadians": 0.7439727544027411,
          "long": "23.4097679",
          "longitudeRadians": 0.40857752698267863,
          "name": "Gracie-Leigh Mccallum"
        }, {
          "id": 28,
          "lat": "42.6048396",
          "latitudeRadians": 0.7435947283040639,
          "long": "23.4793636",
          "longitudeRadians": 0.40979220109290887,
          "name": "Romy Harrison"
        }, {
          "id": 7,
          "lat": "41.9279411",
          "latitudeRadians": 0.731780620777253,
          "long": "25.9083249",
          "longitudeRadians": 0.45218557318143066,
          "name": "Lorna Montgomery"
        }, {
          "id": 8,
          "lat": "42.7047197",
          "latitudeRadians": 0.745337964906285,
          "long": "23.395183",
          "longitudeRadians": 0.40832297245660454,
          "name": "Ffion Firth"
        }];

        expect(partners).toEqual(expect.arrayContaining(expected));
      });
    });

    describe('when incorrect file is provided', () => {
      it('should return empty array', async function () {
        const filePath = 'input/test_data.txt';
        const partners = await PartnerParser.getPartnersFromFile(filePath);
        const expected: Partner[] = [];
        expect(partners).toEqual(expect.arrayContaining(expected));
      });
    });
  });
})
