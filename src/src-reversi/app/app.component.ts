import { Component, OnInit } from '@angular/core';
import { Cell } from './cell';

const enum CellState {
    Black = -1,
    Empty = 0,
    White = 1
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  board_size = 8; 
  board: Cell[][] = [];
  disk = { type: CellState.Black };
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
        this.board[row][col] = new Cell(row, col, CellState.Empty);
      } 
    }
  }

  init() {
    // 33 34
    // 43 44
    let center1 = this.board_size/2 - 1;
    let center2 = this.board_size/2;
    this.board[center1][center1].state = CellState.White;
    this.board[center1][center2].state = CellState.Black;
    this.board[center2][center1].state = CellState.Black;
    this.board[center2][center2].state = CellState.White;

    //this.score.black = 2;
   // this.score.white = 2;
     this.getScore();
  }

  setCell(cell:Cell) {
    console.log(this.disk.type);
    this.setChanged(cell);
    this.getScore();
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
          let counter = 0;
          let close_disk = false;
          for(let i=0; i< this.board_size; i++) {
            if(row < 0 || row >= this.board_size 
                  || col < 0 || col >= this.board_size) { 
              break;
            }
            
            if(this.board[row][col].state == CellState.Empty) {
              break;
            } else if(this.board[row][col].state == this.disk.type) {
              if(counter == 0) {
                break; 
              } else { 
                close_disk = true;
                break;
              }    
            } else if(this.board[row][col].state != this.disk.type) {
              counter++;
            }

            row += row1;
            col += col1;  
          }
          
          console.log("close_disk : " + close_disk);
          if(close_disk) {
            cell.state = this.disk.type;
            let row = cell.row + row1;
            let col = cell.col + col1; 
            for(let i=0; i< this.board_size; i++) {
              if(this.board[row][col].state != this.disk.type) {
                this.board[row][col].state = this.disk.type;
              } else {
                break;
              }
            }
            break;
          }
      }  
          
    } 
  }

  getScore() {
    this.score.black = 0;
    this.score.white = 0;
    for(let row: number = 0; row < this.board_size; row++){ 
      for(let col: number = 0; col < this.board_size; col++){

         if(this.board[row][col].state == CellState.Black) {
              this.score.black++;
          } else if(this.board[row][col].state == CellState.White) {
              this.score.white++;
          } 
      } 
    }
  }
}


