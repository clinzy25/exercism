//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { resourceLimits } from "worker_threads";

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const decodedValue = (arr) => {
  let result = [];
  for (let color of COLORS) {
    if (color === arr[0]) 
      result.unshift(COLORS.indexOf(arr[0]));
    if (color === arr[1]) 
      result.push(COLORS.indexOf(arr[1]));
  }
  return Number(result.join(''));
};
