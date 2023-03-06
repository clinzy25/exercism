//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { stringify } from "querystring";

export const reverseString = (str) => {
  if (str == '')
    return str;
  return reverseString(str.substr(1)) + str.charAt(0);
};
