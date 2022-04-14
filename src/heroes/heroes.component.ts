import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


interface Hero {
    id: number;
    name: string;
  }
@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit{
    heroes: Hero[] = [];
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
      };

    constructor(private heroService: HeroService, private messageService: MessageService) { }
    ngOnInit(): void {
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      
    }



    // selectedHero?: Hero;
    // selectedHero?: Hero = this.hero
    // onSelect(hero: Hero): void {
    //     this.selectedHero = hero;
    //     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    // }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
    }

    delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero.id).subscribe();
    }
}