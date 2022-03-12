import Traveler from '../src/js/gal.js';

describe('Traveler', () => {

  test("should create a basic 'Astronaut' object with properties of age and planet", () => {
    const astronaut = new Traveler(34, "Earth"); 
    expect(astronaut.age).toEqual(34);
    expect(astronaut.planet).toEqual("Earth");
  });

  describe('Travelr#dogYears', () => {

    test("should create a prototype method for determining a user's age based on the value 'Earth' for the planet property", () => {
      const astronaut = new Traveler(34, "Earth"); 
      expect(astronaut.planet).toEqual("Earth");
      expect(astronaut.dogYears()).toEqual(34);
    });

    test("should build upon the prototype method for determining a user's age based on the value 'Mercury' for the planet property", () => {
      const astronaut = new Traveler(34, "Mercury"); 
      expect(astronaut.planet).toEqual("Mercury");
      expect(astronaut.dogYears()).toEqual(141.67);
    });

    test("should build upon the prototype method for determining a user's age based on the value 'Venus' for the planet property", () => {
      const astronaut = new Traveler(34, "Venus"); 
      expect(astronaut.planet).toEqual("Venus");
      expect(astronaut.dogYears()).toEqual(54.84);
    });

    test("should build upon the prototype method for determining a user's age based on the value 'Mars' for the planet property", () => {
      const astronaut = new Traveler(34, "Mars"); 
      expect(astronaut.planet).toEqual("Mars");
      expect(astronaut.dogYears()).toEqual(18.09);
    });
  });
});