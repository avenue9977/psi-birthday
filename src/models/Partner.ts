import Location from "./Location";

export default class Partner extends Location {
  constructor(public id: number, public name: string, public lat: string, public long: string) {
    super(parseFloat(lat), parseFloat(long));
  }
}
