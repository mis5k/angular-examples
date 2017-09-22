import { Component, OnInit } from '@angular/core';
import { Cell } from './cell';
import { User } from './user';
import { CellState } from './cellState';
import { GameInfo } from './gameInfo';
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
  gameInfo: GameInfo;
  name: string;
 // disk = { type: CellState.Black };
  turn:CellState;
  score = {
    black: 0,
    white: 0
  };
  user:User;
  userType:CellState;
  myDiskType:CellState;
  showUserBtn:Boolean;
  ONE_HOUR:number = 1000 * 60 * 60;

  constructor( 
    private reversiService: ReversiService,
  ) {}

  ngOnInit(): void {

    this.reversiService.getAllRoomInfo().subscribe(infos => {
      infos.forEach(info => {
        let gap = Date.now() - info.time;
        if(gap > this.ONE_HOUR) {
          this.reversiService.deleteGameInfo(info.$key);
          this.reversiService.getUsers(info.name).remove();
        }
      });
    });
    this.myDiskType = 0;
  } 

  createGameRoom(name:string) {

    this.reversiService.verifyRoom(name).once("value", snapshot => {
      const data = snapshot.val();
      if (data) {
        console.log("exists!");
      } else {
        this.name = name; 
        this.reversiService.createBoard(name);
        this.reversiService.createUser(name);
        this.reversiService.getUsers(name).subscribe(user => {
          this.user = user[0];
          this.showUserBtn = true;
        }); 
      }
    });
  }

  joinGameRoom(name:string) {
    this.reversiService.verifyUser(name).once("value", snapshot => {
      const userData = snapshot.val();
      console.log(userData);
      if (userData) {
        console.log("exists!");
        this.name = name;
        this.reversiService.getUsers(name).subscribe(user => {
          this.user = user[0];
          this.showUserBtn = true;
        }); 
      } else {
        console.log("not exists!");
      }
    });
  }

  createBoard() {
    this.reversiService.getGameRoomInfo(this.name).subscribe(info => {
      console.log(info);
      this.gameInfo = info[0];
      this.board = this.gameInfo.board;
    });    
  }
 
  changeDiskType(type:CellState) {
    this.userType = type; 
  }

  selectDiskType() {
    if(this.userType == CellState.Black) {
      this.user.black = true;
      this.myDiskType = CellState.Black;
    } else if(this.userType == CellState.White) {
      this.user.white = true;
      this.myDiskType = CellState.White;
    }
    this.reversiService.updateUser(this.user);
  }

  startGame() {
    this.createBoard();
  }

  setCell(cell:Cell, key:any) {
    if(this.myDiskType == this.user.turn) {
      let changedTurn = false;
      for(let dirX = -1; dirX <= 1; dirX++){
        for(let dirY = -1; dirY <= 1; dirY++){
          if(dirX == 0 && dirY == 0) 
            continue;

          let list = this.getreversibleDisk(cell, dirX, dirY);
          console.log(list);
          if(list.length > 0) {
            changedTurn = true;
            list.forEach((cell) => {
              cell.state = this.user.turn;
            });
          }
        } 
      } 

      if(changedTurn) {
        cell.state = this.user.turn;
        this.user.turn = (this.user.turn == CellState.Black) ? CellState.White : CellState.Black;
        this.gameInfo.board = this.board;
        this.reversiService.updateGameInfo(this.gameInfo);
        this.reversiService.updateUser(this.user);
      }
      this.setScore();
    }
  }

  getreversibleDisk(cell:Cell, dirX:number, dirY:number) {
    console.log("getreversibleDisk");
    let row = cell.row + dirX;
    let col = cell.col + dirY;
    let list:Cell[] = [];

    while (this.isInRange(row, col)) {
      console.log("AAAA");
      if(this.board[row][col].state == CellState.Empty) {
        list = [];
        break;
      } else if(this.board[row][col].state == this.user.turn) {
        break;
      } else if(this.board[row][col].state != this.user.turn) {
        console.log("BBBBBB");
        console.log(this.board[row][col]);
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


