import { Component, OnInit } from '@angular/core';
import { Cell } from './cell';;
import { CellState } from './cellState';
import { Board } from './board';
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
 // board:Board;
  disk = { type: CellState.Black };
  turn:CellState;
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
    this.turn = CellState.Black;
    this.disk.type = CellState.Black;
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
      this.board = board[0]; 
    //  console.log(board[0]);   
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
    
  /*
    this.reversiService.updateBoard(this.board[center1][center1], this.board[center1][center1].$key);
    this.reversiService.updateBoard(this.board[center1][center2], this.board[center1][center2].$key);
    this.reversiService.updateBoard(this.board[center2][center1], this.board[center2][center1].$key);
    this.reversiService.updateBoard(this.board[center2][center2], this.board[center2][center2].$key);
    */
  }

  setCell(cell:Cell, key:any) {
    for(let dirX = -1; dirX <= 1; dirX++){
      for(let dirY = -1; dirY <= 1; dirY++){
        if(dirX == 0 && dirY == 0) 
          continue;

        let list = this.getreversibleDisk(cell, dirX, dirY);
        if(list.length != 0) {
          cell.state = this.disk.type;
          list.forEach((cell) => {
            cell.state = this.disk.type;
          });
        }
      } 
    }
    this.setScore();
  }

  getreversibleDisk(cell:Cell, dirX:number, dirY:number) {
    let row = cell.row + dirX;
    let col = cell.col + dirY;
    let list:Cell[] = [];

    while (this.isInRange(row, col)) {
      if(this.board[row][col].state == CellState.Empty) {
        list = [];
        break;
      } else if(this.board[row][col].state == this.disk.type) {
        break;
      } else if(this.board[row][col].state != this.disk.type) {
        list.push(this.board[row][col]);
      }
      row += dirX;
      col += dirY;  
    }
    return list;
  }

  isInRange(row:number, col:number) {
    if(row < 0 || row >= this.board_size 
      || col < 0 || col >= this.board_size) { 
      return false;
    }
    return true;
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


