import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
 // heroes: Hero[] = [];

  heroes: FirebaseListObservable<Hero[]>;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    console.log(this.heroService.getHeroes());
     this.heroes = this.heroService.getHeroes();

  }
}
