import { Component, OnInit } from '@angular/core';
import { Cell } from './cell';;
import { CellState } from './cellState';
import { ReversiService } from './reversi.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
    private reversiService: ReversiService,
  ) {}

  ngOnInit(): void {

    this.createBoard();
    this.initBoard();
    this.setScore();
  } 

  createBoard() {
    /*
    for(let row: number = 0; row < this.board_size; row++){
      this.board[row] = []; 
      for(let col: number = 0; col < this.board_size; col++){
        this.board[row][col] = new Cell(row, col, CellState.Empty);
      } 
    }
    */
    this.reversiService.createBoard();
    this.reversiService.getBoard().subscribe(board => {
      this.board = [];
      board.forEach((t, i) => {
        if(i % this.board_size == 0) {
          let row = (i == 0) ? 0 : ( i / this.board_size);
          this.board.push(board.slice(row * this.board_size, (row + 1) * this.board_size)); 
        }
      });     
    }); 
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
  
    this.reversiService.updateBoard(this.board[center1][center1], this.board[center1][center1].$key);
    this.reversiService.updateBoard(this.board[center1][center2], this.board[center1][center2].$key);
    this.reversiService.updateBoard(this.board[center2][center1], this.board[center2][center1].$key);
    this.reversiService.updateBoard(this.board[center2][center2], this.board[center2][center2].$key);
    
  }

  setCell(cell:Cell, key:any) {
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
  //  console.log(key);
    console.log(this.disk.type);
    for(let dirX: number = -1; dirX <= 1; dirX++){
      for(let dirY: number = -1; dirY <= 1; dirY++){
        if(dirX == 0 && dirY == 0) 
          continue;

        if(this.checkLastDisk(cell, dirX, dirY)) {
            cell.state = this.disk.type;
            this.reversiService.updateBoard(cell, cell.$key);
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
        this.reversiService.updateBoard(this.board[row][col], this.board[row][col].$key);
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


