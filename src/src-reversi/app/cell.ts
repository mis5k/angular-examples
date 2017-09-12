export class Cell {
  row: number;
  col: number;
  disk: string;

  constructor(row:number, col:number, disk:string) {
    this.row = row;
    this.col = col;
    this.disk = disk;
  }
}