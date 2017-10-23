export class Cell {
  row: number;
  col: number;
  state: number;
  $key: string;
  flip: string;

  constructor(row:number, col:number, state:number) {
    this.row = row;
    this.col = col;
    this.state = state;
  }
}