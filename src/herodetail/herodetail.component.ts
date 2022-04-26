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

    constructor( private route: ActivatedRoute,private heroService: HeroService,private location: Location) {
      console.log('route', route)
    }
    ngOnInit(): void {
      console.log('route1', this.route.snapshot)
      let id;
        // const id = Number(this.route.snapshot.paramMap.get('id')); //If you intend not to update your URL parameter within the same component you are accessing it, then you can use the snapshot.
        // this.heroService.getHero(id).subscribe(hero => this.hero = hero);
        
        // this.route.queryParams.subscribe(params => {//?id=12 gevl unshij avna.
        //   console.log('params', params)
        //   id = params['id'];
        //   this.heroService.getHero(id).subscribe(hero => this.hero = hero);
        // });
        // this.route.paramMap.subscribe(params => {  //If you intend to update the URL parameter within the same component, then you have to use a subscription.
        //   this.products.forEach((p: Product) => {
        //     if (p.id == params.id) {
        //       this.product = p;
        //     }
        //   });
        // });
        
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