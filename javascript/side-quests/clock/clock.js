export class Clock {
  constructor(hours, minutes = 0) {
    while (minutes < 0)   minutes += 60, hours--;
    while (minutes >= 60) minutes -= 60, hours++;
    while (hours < 0)     hours += 24;
    while (hours >= 24)   hours -= 24;
    this.hours = hours;
    this.minutes = minutes;
  }
  toString() {
    let format = value => (value < 10 ? '0' : '') + value;
    return `${format(this.hours)}:${format(this.minutes)}`
  }

  plus(minutes) {
    return new Clock(this.hours, this.minutes + minutes)
  }

  minus(minutes) {
    return new Clock(this.hours, this.minutes - minutes)
  }

  equals(clock) {
    return this.hours === clock.hours && this.minutes === clock.minutes;
  }
}
