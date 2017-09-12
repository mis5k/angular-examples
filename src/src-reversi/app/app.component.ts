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
    this.board[center1][center1].disk = 'white';
    this.board[center1][center2].disk = 'black';
    this.board[center2][center1].disk = 'black';
    this.board[center2][center2].disk = 'white';

    this.score.black = 2;
    this.score.white = 2;
  }

  setCell(cell:Cell) {
    console.log(this.circle.type);
    cell.disk = this.circle.type;
    this.setChanged(cell);
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
  // this.circle.type
   
   console.log("setChanged");

   for(let row1: number = -1; row1 <= 1; row1++){
    for(let col1: number = -1; col1 <= 1; col1++){
        if(row1 == 0 &&  col1 == 0) 
          continue;

          let row = cell.row + row1;
          let col = cell.col + col1;
          console.log("row : " + row + "col : " + col);
          let counter = 0;
          let close_disk = false;
          for(let i=0; i< this.board_size; i++) {
            if(row < 0 && row >= this.board_size 
                  || col < 0 && col >= this.board_size) {
              break;
            }

            if(this.board[row][col].disk =="") {
              break;
            } else if(this.board[row][col].disk == this.circle.type) {
              if(counter == 0) {
                break; 
              } else { 
                close_disk = true;
                break;
              }    
            } else if(this.board[row][col].disk != this.circle.type) {
              counter++;
            }

            row += row1;
            col += col1;  
          }
          console.log("close_disk : " + close_disk);
          if(close_disk) {
            let row = cell.row + row1;
            let col = cell.col + col1; 
            for(let i=0; i< this.board_size; i++) {
              if(this.board[row][col].disk != this.circle.type) {
                this.board[row][col].disk = this.circle.type;
              } else {
                break;
              }
            }
            break;
          }
     }  
          
    } 
  }
}


