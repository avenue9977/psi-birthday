import DistanceCalculator from "../DistanceCalculator";
import IRadians from "./IRadians";

export default class Location implements IRadians {
  latitudeRadians: number;
  longitudeRadians: number;

  constructor(lat: number, long: number) {
    this.latitudeRadians = DistanceCalculator.getRadians(lat);
    this.longitudeRadians = DistanceCalculator.getRadians(long);
  }
}
