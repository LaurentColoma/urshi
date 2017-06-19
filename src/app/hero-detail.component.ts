import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'hero-detail',
	templateUrl: `./html/hero-detail.component.html`,
	styleUrls: [ './css/hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {
	@Input() hero : Hero;
	selectedTalent = -1
	
	constructor (
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
	) {
	}

	ngOnInit(): void {
	  this.route.params.switchMap((params: Params) =>
	  this.heroService.getHero(+params['id'])).
		subscribe(hero => this.hero = hero);
	}

	selectTalent(talent: number) {
	  this.selectedTalent = talent;
	}

	goBack(): void {
	  this.location.back();
	}

	save(): void {
	  this.heroService.update(this.hero)
	    .then(() => this.goBack());
	}
}