import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';


@Component({
    selector: 'app-herodetail',
    templateUrl: './herodetail.component.html'
})
export class HerodetailComponent{
    @Input() hero?: Hero;

    constructor( private route: ActivatedRoute,private heroService: HeroService,private location: Location) {}
    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
      }

      save(): void {
        if (this.hero) {
          this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
        }
      }
}