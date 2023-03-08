export class Matrix {
  constructor(str) {
    this.str = str;
  }

  get rows() {
    return this.str
      .split('\n')
      .map((row) => [...Array.from(row.split(' '))].map(Number));
  }

  get columns() {
    const rows = this.rows;
    const columns = [];
    for (let i = 0; i < rows[0].length; i++) {
      const col = [];
      for (let j = 0; j < rows.length; j++) {
        col.push(rows[j][i]);
      }
      columns.push(col);
    }
    return columns;
  }
}

