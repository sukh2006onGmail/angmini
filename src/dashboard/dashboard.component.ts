import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    imgsrc="/assets/alms.jpg"
    email = "aabb"
    price = 123


    heroes: Hero[] = [];
    
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
      }
    

      mychange(varner){
        console.log('assbb', varner)
      }
}
