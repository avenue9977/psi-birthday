import Location from "./models/Location";

class DistanceCalculator {
  private readonly EARTH_RADIUS = 6371;

  getRadians = (coordinate: number): number => coordinate * (Math.PI / 180);

  getAbsoluteDifference = (a: number, b: number): number => {
    const result = a - b;
    return (result > 0) ? result : result * -1;
  }

  getDistanceBetweenLocations = (location1: Location, location2: Location): number => {
    const absoluteDifferenceBtwRadians = this.getAbsoluteDifference(location1.longitudeRadians, location2.longitudeRadians)

    const centralAngle = Math.acos(
      Math.sin(location1.latitudeRadians) * Math.sin(location2.latitudeRadians)
      + Math.cos(location1.latitudeRadians) * Math.cos(location2.latitudeRadians) * Math.cos(absoluteDifferenceBtwRadians));

    return centralAngle * this.EARTH_RADIUS;
  }
}

export default new DistanceCalculator()
