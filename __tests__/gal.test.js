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
    })
  });
});