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
    } else if (this.planet === "Mercury") {
      currentAge = this.age / 0.24;
    } else if (this.planet === "Venus") {
      currentAge = this.age / 0.62;
    } else if (this.planet === "Mars") {
      currentAge = this.age / 1.88;
    }
    return parseFloat(currentAge.toFixed(2))
  }
}


  