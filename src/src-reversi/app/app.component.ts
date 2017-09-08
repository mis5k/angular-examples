import { Component, OnInit } from '@angular/core';
import { Cell } from './cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello World';
  board_size = 8; 
  board: Cell[][] = [];
  circle = {type: "black"};
  score = {
    black: 0,
    white: 0
  };


  constructor( 
  ) {}

  ngOnInit(): void {
    this.createBoard();
    this.init();
  } 

  createBoard() {
    for(let row: number = 0; row < this.board_size; row++){
      this.board[row] = []; 
      for(let col: number = 0; col < this.board_size; col++){
        this.board[row][col] = new Cell(row, col, "");
      } 
    }
  }

  init() {
    // 33 34
    // 43 44
    let center1 = this.board_size/2 - 1;
    let center2 = this.board_size/2;
    this.board[center1][center1].style = 'white';
    this.board[center1][center2].style = 'black';
    this.board[center2][center1].style = 'black';
    this.board[center2][center2].style = 'white';

    this.score.black = 2;
    this.score.white = 2;
  }

  setCell(cell:Cell) {
    console.log(this.circle.type);
    cell.style = this.circle.type;
  }

  setChanged (cell:Cell) {
    /* 
    cell.row, cell.col
    cell.row -1    
    cell.row +1
  
               cell.col-1
               cell.col+1
    cell.row -1  cell.col +1
    cell.row +1  cell.col -1


    cell.row +1  cell.col +1
    cell.row -1  cell.col -1  
    */
  
  /*
  for(let row: number = 0; row < this.row_num; row++){
    for(let col: number = 0; col < this.col_num; col++){
      
    } 
  }
  */

  }

}
