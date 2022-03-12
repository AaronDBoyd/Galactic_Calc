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
    } else if (this.planet === "Jupiter") {
      currentAge = this.age / 11.86;
    } else {
      return "So, Where ya livin?";
    }
    return parseFloat(currentAge.toFixed(2))
  }

  yearsLeft () {
    let expect = 77.8 - this.age;
    let daysNumbered = 0;
    if (this.planet === "Earth") {
      daysNumbered = expect / 1;
    } else if (this.planet === "Mercury") {
      daysNumbered = expect / 0.24;
    } else if (this.planet === "Venus") {
      daysNumbered = expect / 0.62;
    } else if (this.planet === "Mars") {
      daysNumbered = expect / 1.88;
    } else if (this.planet === "Jupiter") {
      daysNumbered = expect / 11.86;
    } else {
      return "So, Where ya livin?";
    }
    return parseFloat(daysNumbered.toFixed(2));
  }

  surpassed () {
    let expect = 77.8 - this.age;
    let extraYears = 0;
    if (Math.sign(expect) === -1) {
      if (this.planet === "Earth") {
        extraYears = "You've outlived your expected life span by " + (parseFloat((expect / 1) * -1).toFixed(2)) + " years.";
      } else if (this.planet === "Mercury") {
        extraYears = "You've outlived your expected life span by " + (parseFloat((expect / 0.24) * -1).toFixed(2)) + " years.";
      } else if (this.planet === "Venus") {
        extraYears = "You've outlived your expected life span by " + (parseFloat((expect / 0.62) * -1).toFixed(2)) + " years.";
      } else if (this.planet === "Mars") {
        extraYears = "You've outlived your expected life span by " + (parseFloat((expect / 1.88) * -1).toFixed(2)) + " years.";
      } else if (this.planet === "Jupiter") {
        extraYears = "You've outlived your expected life span by " + (parseFloat((expect / 11.86) * -1).toFixed(2)) + " years.";
      } else {
        return "So, Where ya livin?";
      }
      return extraYears;
      }
    }
}  


  