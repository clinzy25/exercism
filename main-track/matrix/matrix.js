export class Matrix {
  constructor(string) {
    this.string = string;
  }

  getDivisor() {
    let divisor = 1;
    for (let i = 0; i < this.string.length; i++) {
      if (this.string[i] === ' ') divisor++;
      if (this.string[i] === '\n') break;
    }
    return divisor;
  }

  stringToArray = () => this.string.match(/[0-9]+/g).map((item) => +item);

  get rows() {
    const divisor = this.getDivisor();
    const stringToArray = this.stringToArray();
    let result = [],
      counter = -1;
    stringToArray.map((item, index) => {
      if (index % divisor === 0 && index !== 1) {
        result.push([item]);
        counter++;
      } else result[counter].push(item);
    });
    return result;
  }

  get columns() {
    const divisor = this.getDivisor();
    const stringToArray = this.string.match(/[0-9]+/g).map((item) => +item);
    let result = [],
      counter = 0;
    stringToArray.map((item, index) => {
      index % divisor === 0 ? (counter = 0) : counter++;
      if (index < divisor) result.push([item]);
      else result[counter].push(item);
    });
    return result;
  }
}
