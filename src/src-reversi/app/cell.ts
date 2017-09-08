export class Cell {
  row: number;
  col: number;
  style: string;

  constructor(row:number, col:number, style:string) {
    this.row = row;
    this.col = col;
    this.style = style;
  }
}