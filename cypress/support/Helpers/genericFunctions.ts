export default class genericMethods {
  static generateRandomID(maxNumber = 100) {
    return Math.round(maxNumber * Math.random());
  }
}

