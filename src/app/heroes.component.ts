import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: `./html/heroes.component.html`,
  styleUrls: [ './css/heroes.component.css' ], 
  providers: [ HeroService ]
})
export class HeroesComponent implements OnInit { 
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
	  private router: Router,
	  private heroService: HeroService
	) { }
	//Can replace getHeroes by getHeroesSlowly and reverse
	getHeroes(): void {
	  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	//getHeroesSlowly simulate a server latency
	ngOnInit(): void {
	  this.getHeroes();
	}

	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	  this.router.navigate(['/detail', this.selectedHero.id]);
	}

	gotoDetail(): void {
	  this.router.navigate(['/detail', this.selectedHero.id]);
	}

	add(name: string): void {
	  name = name.trim();
	  if (!name) { return; }
	  this.heroService.create(name)
	    .then(hero => {
		this.heroes.push(hero);
		this.selectedHero = null;
	  });
	}

	delete(hero: Hero): void {
	  this.heroService
	      .delete(hero.id)
	      .then(() => {
		this.heroes = this.heroes.filter(h => h !== hero);
		if (this.selectedHero === hero) {
		  this.selectedHero = null;
		}
	      });
	}
}