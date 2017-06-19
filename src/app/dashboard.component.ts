import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

var rand = Math.floor(Math.random() * 67 + 1);

@Component({
	selector: 'my-dashboard',
	templateUrl: `./html/dashboard.component.html`,
	styleUrls: [ './css/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService) {
  }

  

  ngOnInit(): void {
    this.heroService.getHeroes()
	.then(heroes => this.heroes = heroes.slice(rand, rand + 1));
  }
}