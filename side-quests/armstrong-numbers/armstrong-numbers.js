//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (input) => {
  const num = input.toString();
  let result = 0;
  for (let digit of num) {
    result += digit**num.length;
  }
  return result == input ? true : false;
};
