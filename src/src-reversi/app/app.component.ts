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
    this.initBoard();
    this.setScore();
  } 

  createBoard() {
    for(let row: number = 0; row < this.board_size; row++){
      this.board[row] = []; 
      for(let col: number = 0; col < this.board_size; col++){
        this.board[row][col] = new Cell(row, col, CellState.Empty);
      } 
    }
  }

  initBoard() {
    // 33 34
    // 43 44
    let center1 = this.board_size/2 - 1;
    let center2 = this.board_size/2;
    this.board[center1][center1].state = CellState.White;
    this.board[center1][center2].state = CellState.Black;
    this.board[center2][center1].state = CellState.Black;
    this.board[center2][center2].state = CellState.White;
  }

  setCell(cell:Cell) {
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
    console.log(this.disk.type);
    for(let dirX: number = -1; dirX <= 1; dirX++){
      for(let dirY: number = -1; dirY <= 1; dirY++){
        if(dirX == 0 && dirY == 0) 
          continue;

        if(this.checkLastDisk(cell, dirX, dirY)) {
            cell.state = this.disk.type;
            this.changeDisk(cell, dirX, dirY);          
            break;
        }
      }  
          
    }
    this.setScore();
  }

  changeDisk (cell:Cell, dirX:number, dirY:number) {
    console.log("ChangeDisk");
    let row = cell.row + dirX;
    let col = cell.col + dirY; 
    for(let i=0; i< this.board_size; i++) {
      if(this.board[row][col].state != this.disk.type) {
        this.board[row][col].state = this.disk.type;
      } else {
        break;
      }
    }
  }

  checkLastDisk(cell:Cell, dirX:number, dirY:number) {
    let row = cell.row + dirX;
    let col = cell.col + dirY;
    let counter = 0;

    for(let i=0; i< this.board_size; i++) {
      if(row < 0 || row >= this.board_size 
          || col < 0 || col >= this.board_size) { 
          return false;
      }
            
      if(this.board[row][col].state == CellState.Empty) {
        return false;
      } else if(this.board[row][col].state == this.disk.type) {
        if(counter == 0) {
          return false;
        }
        return true;
      } else if(this.board[row][col].state != this.disk.type) {
        counter++;
      }
      row += dirX;
      col += dirY;  
    }
    return false;
  }

  setScore() {
    this.score.black = 0;
    this.score.white = 0;
    for(let row: number = 0; row < this.board_size; row++) { 
      for(let col: number = 0; col < this.board_size; col++) {

         if(this.board[row][col].state == CellState.Black) {
              this.score.black++;
          } else if(this.board[row][col].state == CellState.White) {
              this.score.white++;
          } 
      } 
    }
  }
}


