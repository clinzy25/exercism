//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides.sort((a, b) => a - b);
  }
  get isEquilateral() {
    let [a, b, c] = this.sides;
    return a == b &&
           b == c &&
           a == c &&
           a + b > c ?
           true : false;
  }
  get isIsosceles() {
    let [a, b, c] = this.sides;
    return (a == b ||
           b == c ||
           a == c) &&
           a + b > c ?
           true : false;
  }
  get isScalene() {
    let [a, b, c] = this.sides;
    return a !== b &&
           b !== c &&
           a !== c &&
           a + b > c?
           true : false;
  }
}
