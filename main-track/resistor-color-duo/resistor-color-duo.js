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

export const decodedValue = (arr) => (COLORS.indexOf(arr[1]) * 0.1 + COLORS.indexOf(arr[0])) * 10;