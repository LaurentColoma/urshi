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
	
	getHeroes(): void {
	  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
	  this.getHeroes();
	}
	
	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	  this.router.navigate(['/detail', this.selectedHero.id]);
	}
}