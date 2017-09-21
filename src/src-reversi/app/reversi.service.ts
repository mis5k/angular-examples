import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Cell } from './cell';
import { User } from './user';
import { GameInfo } from './gameInfo';
import { CellState } from './cellState';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

@Injectable()
export class ReversiService {

  constructor(private db: AngularFireDatabase) { }

  private userUrl = '/user';
  private gameInfoUrl = '/gameInfo';

  board_size = 8; 
  board: Cell[][] = [];


  getAllRoomInfo(): FirebaseListObservable<GameInfo[]> {
    return this.db.list(this.gameInfoUrl,  {query: {
      orderByChild: 'time'
    }});
  }


  getGameRoomInfo(name:string): FirebaseListObservable<GameInfo[]>{
    let db = this.db.list(this.gameInfoUrl);
    return this.db.list(this.gameInfoUrl, {query: {
      orderByChild: 'name',
      equalTo: name
    }});
  }

  getUsers(name:string): FirebaseListObservable<User[]> {
    return this.db.list(this.userUrl, {query: {
      orderByChild: 'name',
      equalTo: name
    }});
  }

  createBoard(name:string): any {
    let db = this.db.list(this.gameInfoUrl);
    for(let row: number = 0; row < this.board_size; row++){
        this.board[row]=[]; 
      for(let col: number = 0; col < this.board_size; col++){
        this.board[row][col] = new Cell(row, col, CellState.Empty); 
      }
    }

    db.push({
      "name": name,
      "board": this.board,
      "time": Date.now()
    });
  }

  createUser(name:string): any {
    let user = this.db.list(this.userUrl);
    user.push({
      "name": name,
      "black": false,
      "white": false,
      "turn": 0  
    }); 
  }

  verifyRoom(name:string) {
    let db = this.db.list(this.gameInfoUrl);
    return db.$ref.orderByChild("name").equalTo(name);
  }

  verifyUser(name:string) {
    let db = this.db.list(this.userUrl);
    return db.$ref.orderByChild("name").equalTo(name);
  }

  updateGameInfo(gameInfo:GameInfo): any {
    return this.db.list(this.gameInfoUrl).update(gameInfo.$key, gameInfo);
  }

  updateUser(user:User): any {
    return this.db.list(this.userUrl).update(user.$key, user);
  }

  deleteGameInfo($key:string): any {
    return this.db.list(this.gameInfoUrl).remove($key);
  }

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}