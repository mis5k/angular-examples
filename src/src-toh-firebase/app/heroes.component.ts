import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }                from './hero';
import { HeroService }         from './hero.service';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  // heroes: Hero[];
  heroes: FirebaseListObservable<Hero[]>;
  // selectedHero: Hero | null;
  selectedHero: Hero | null;
  lastHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  getLastHero(): void {
    this.heroService.getLastHero().subscribe(hero => {
        this.lastHero = hero[0];
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name, +this.lastHero.id+1).then((hero:any) => {
      //  this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.$key)
        .then(() => {
         // this.heroes = this.heroes.filter(h => h !== hero);
         // this.heroes.remove(hero.$key);
         this.getLastHero();
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
  

  ngOnInit(): void {
    this.getHeroes();
    this.getLastHero();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    if (this.selectedHero) {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
  }
}
