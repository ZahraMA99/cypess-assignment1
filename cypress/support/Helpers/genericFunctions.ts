export default class genericMethods {
  static generateRandomID(maxNumber = 1000) {
    return Math.round(maxNumber * Math.random());
  }
}

