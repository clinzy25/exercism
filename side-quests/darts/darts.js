//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  const rangeToScore = [[1, 10], [5, 5], [10, 1]];
  for (let score of rangeToScore) {
    let edgeOfCir = score[0]; //score[0] is a range
      if (x**2 + y**2 <= edgeOfCir**2) return score[1];
  }
  return 0;
};