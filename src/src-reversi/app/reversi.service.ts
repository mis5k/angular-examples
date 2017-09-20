import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Cell } from './cell';
import { Board } from './board';
import { CellState } from './cellState';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

export class User {
  black: boolean;
  white: boolean;
  $key: string;
}

@Injectable()
export class ReversiService {

  constructor(private db: AngularFireDatabase) { }

  private userUrl = '/user';
  private boardUrl = '/board';

  board_size = 8; 
  board: Cell[][] = [];

  getBoard(): FirebaseListObservable<Cell[][][]> {
    return this.db.list(this.boardUrl);
  }

  getUsers(): FirebaseListObservable<User[]> {
    return this.db.list(this.userUrl);
  }

  createBoard(): any{
    const board = this.db.list(this.boardUrl)
    
    board.remove();
    for(let row: number = 0; row < this.board_size; row++){
        this.board[row]=[]; 
      for(let col: number = 0; col < this.board_size; col++){
        this.board[row][col] = new Cell(row, col, CellState.Empty); 
       // board.push(new Cell(row, col, CellState.Empty));
      }
    }
    board.push(this.board);
  }

  createUser(): any {
    const user = this.db.list(this.userUrl)
    user.remove();

    return this.db.list(this.userUrl).push({
      black: false,
      white: false
    }); 
  }

  updateBoard(cell:Cell, $key:string): any {
    return this.db.list(this.boardUrl).update($key, cell);
  }

  updateUser(user:User, $key:string): any {
    return this.db.list(this.userUrl).update($key, user);
  }

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}