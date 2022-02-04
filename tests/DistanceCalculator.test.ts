import DistanceCalculator from "../src/DistanceCalculator";
import Location from "../src/models/Location";

describe('DistanceCalculator', () => {
  describe('getRadians', () => {
    it('should return a radians from a coordinate', function () {
      expect(DistanceCalculator.getRadians(42.6661417)).toBe(0.7446646517874507);
    });
  });

  describe('getAbsoluteDifference', () => {
    it('should return the absolute difference between two numbers', function () {
      expect(DistanceCalculator.getAbsoluteDifference(30, 60)).toBeGreaterThanOrEqual(0);
      expect(DistanceCalculator.getAbsoluteDifference(154, 98)).toBeGreaterThanOrEqual(0);
    });
  })

  describe('getDistanceBetweenLocations', () => {
    it('should return distance between two locations', function () {
      const location1 = new Location(42.6665921, 23.351723);
      const location2 = new Location(42.6048396, 23.4793636);
      expect(DistanceCalculator.getDistanceBetweenLocations(location1, location2)).toBe(12.49692074920773);
    });
  });
})
