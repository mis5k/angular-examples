import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

import { Hero } from './hero';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class HeroService {

//  private headers = new Headers({'Content-Type': 'application/json'});
//  private heroesUrl = 'api/heroes';  // URL to web api
  private heroesUrl = '/heroes';
  private last_id = 0;

  constructor(private http: Http, 
    private db: AngularFireDatabase) { }

  getHeroes(): FirebaseListObservable<Hero[]> {
    return this.db.list(this.heroesUrl);
  }

  getHero(id: number): FirebaseListObservable<Hero[]> {
    return this.db.list(this.heroesUrl,  {query: {
      orderByChild: 'id',
      equalTo: id
    }});
  }

  getLastHero(): FirebaseListObservable<Hero[]> {
    return this.db.list(this.heroesUrl,  {query: {
        orderByChild: 'id',
        limitToLast: 1
    }}); 
  }

  delete($key: string): any {
    return this.db.list(this.heroesUrl).remove($key).then(() => null)
      .catch(this.handleError);
  }


  create(name: string, id:number): any {
    return this.db.list(this.heroesUrl).push({
       id: id,
       name: name
      }).then(res => res as Hero)
        .catch(this.handleError);
  }

  update(hero: Hero): any {
    return this.db.list(this.heroesUrl).update(hero.$key, hero).then(() => hero)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

