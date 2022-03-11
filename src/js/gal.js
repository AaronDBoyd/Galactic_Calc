//Business Logic
export default class Traveler {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  dogYears() {
    let currentAge = 0;
    if (this.planet === "Earth") {
      currentAge = this.age * 1;
    }
    return parseFloat(currentAge.toFixed(2))
  }
}


  