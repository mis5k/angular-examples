import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Cell } from './cell';
import { CellState } from './cellState';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';



@Injectable()
export class ReversiService {

  constructor(private db: AngularFireDatabase) { }

  private userUrl = '/user';
  private boardUrl = '/board';

  board_size = 8; 
  board: Cell[][] = [];

  getBoard(): FirebaseListObservable<Cell[]> {
    return this.db.list(this.boardUrl);
  }

  getUsers(): FirebaseListObservable<Cell[]> {
    return this.db.list(this.userUrl);
  }

  createBoard(): any{
    const Board = this.db.list(this.boardUrl)
    Board.remove();
  
    for(let row: number = 0; row < this.board_size; row++){
       // this.board[row]=[]; 
      for(let col: number = 0; col < this.board_size; col++){
        // this.board[row][col] = new Cell(row, col, CellState.Empty); 
        Board.push(new Cell(row, col, CellState.Empty));
      }
    }
  }

  createUser(): any {
    console.log();
    return this.db.list(this.userUrl).push({
      black: true,
      white: false
    }); 
  }

  updateBoard(cell:Cell, $key:string): any {
    return this.db.list(this.boardUrl).update($key, cell);
  }

  updateUser(): any {
   // return this.db.list(this.userUrl).update(cell.$key, cell);
  }

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}