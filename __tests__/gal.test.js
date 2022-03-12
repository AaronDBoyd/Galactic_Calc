import Traveler from '../src/js/gal.js';

describe('Traveler', () => {

  test("should create a basic 'Astronaut' object with properties of age and planet", () => {
    const astronaut = new Traveler(34, "Earth"); 
    expect(astronaut.age).toEqual(34);
    expect(astronaut.planet).toEqual("Earth");
  });

  describe('Traveler#dogYears', () => {

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

    test("should build upon the prototype method for determining a user's age based on the value 'Jupiter' for the planet property", () => {
      const astronaut = new Traveler(34, "Jupiter"); 
      expect(astronaut.planet).toEqual("Jupiter");
      expect(astronaut.dogYears()).toEqual(2.87);
    });

    test("should return 'So, Where ya livin?' if no value selected for planet", () => {
      const astronaut = new Traveler(34, ""); 
      expect(astronaut.planet).toEqual("");
      expect(astronaut.dogYears()).toEqual("So, Where ya livin?");
    });
  });

  describe('Traveler#yearsLeft', () => {

    test("should create a prototype method for determining a user's remaining life expectancy and the value 'Earth' for the planet property", () => {
      const astronaut = new Traveler(34, "Earth"); 
      expect(astronaut.planet).toEqual("Earth");
      expect(astronaut.yearsLeft()).toEqual(43.8);
    });

    test("should build upon the prototype method for determining a user's life expectancy based on the value 'Mercury' for the planet property", () => {
      const astronaut = new Traveler(34, "Mercury"); 
      expect(astronaut.planet).toEqual("Mercury");
      expect(astronaut.yearsLeft()).toEqual(182.5);
    });

    test("should build upon the prototype method for determining a user's life expectancy based on the value 'Venus' for the planet property", () => {
      const astronaut = new Traveler(34, "Venus"); 
      expect(astronaut.planet).toEqual("Venus");
      expect(astronaut.yearsLeft()).toEqual(70.65);
    });

    test("should build upon the prototype method for determining a user's life expectancy based on the value 'Mars' for the planet property", () => {
      const astronaut = new Traveler(34, "Mars"); 
      expect(astronaut.planet).toEqual("Mars");
      expect(astronaut.yearsLeft()).toEqual(23.30);
    });

    test("should build upon the prototype method for determining a user's life expectancy based on the value 'Jupiter' for the planet property", () => {
      const astronaut = new Traveler(34, "Jupiter"); 
      expect(astronaut.planet).toEqual("Jupiter");
      expect(astronaut.yearsLeft()).toEqual(3.69);
    });

    test("should return 'So, Where ya livin?' if no value selected for planet", () => {
      const astronaut = new Traveler(34, ""); 
      expect(astronaut.planet).toEqual("");
      expect(astronaut.yearsLeft()).toEqual("So, Where ya livin?");
    });
  });

  describe ('Traveler#surpassed', () => {

    test("should create a 'surpassed' method that returns the message 'You've outlived your your expected life span by' plus a positive number of years if a user has outlived their life expectancy", () => {
      const astronaut = new Traveler(83, "Earth"); 
      expect(astronaut.planet).toEqual("Earth");
      expect(astronaut.surpassed()).toEqual("You've outlived your expected life span by 5.20 years.");
    });
  });


});