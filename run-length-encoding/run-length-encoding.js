//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = str => str.replace(/(.)\1+/g, ({ length }, char) => length + char);

export const decode = str => str.replace(/(\d+)(.)/g, (_, length, char) => char.repeat(length));

