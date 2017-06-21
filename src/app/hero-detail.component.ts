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
	selectedTalent = -1;
	selectedTier1 = -1;
	selectedTier2 = -1;
	selectedTier3 = -1;
        selectedTier4 = -1;
	selectedTier5 = -1;
        selectedTier6 = -1;
	selectedTier7 = -1;

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

	selectTier1(talent: number) {
	  this.selectedTier1 = talent;
	}

	selectTier2(talent: number) {
	  this.selectedTier2 = talent;
	}

	selectTier3(talent: number) {
          this.selectedTier3 = talent;
        }

        selectTier4(talent: number) {
          this.selectedTier4 = talent;
        }

	selectTier5(talent: number) {
          this.selectedTier5 = talent;
        }

        selectTier6(talent: number) {
          this.selectedTier6 = talent;
        }

	selectTier7(talent: number) {
          this.selectedTier7 = talent;
        }

	goBack(): void {
	  this.location.back();
	}

	save(): void {
	  this.heroService.update(this.hero)
	    .then(() => this.goBack());
	}
}