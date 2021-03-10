//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let log = console.log;

export class Clock {
  constructor(hours, minutes) {
    let log = console.log;
  const clock = (hours, minutes) => {
  let totalMin = hours * 60 + minutes;
  function inc() {
    let i;
    return totalMin > 0 ? i-- : i++;
  }
  hours = 1;
  if (totalMin > 0) {
    for (let i = 0; i < totalMin; i++) {
      if (hours === 25) hours = 0;
      if (i % 60 === 0) hours++;
    }
    return [hours, minutes];
  } else if (totalMin < 0) {
    for (let i = 1; i > totalMin; i--) {
      if (hours === 24) hours = 0;
      if (i % 60 === 0) hours++;
    }
  }
};
}
  toString() {
    return `${this.hours}:${this.minutes}`;
  }

  plus(h, m) {

  }

  minus(h, m) {

  }

  equals(clock) {

  }
}
