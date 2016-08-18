import { Component } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';
import {OnInit} from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{ 
    title = "The tour of heroes";
    heroes : Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) {
      
    }
    ngOnInit(){
      this.getHerose();
    }

    getHerose(){
     this.heroService.getHeroesSlowly().then(resoult => this.heroes = resoult);
    }

    onSelect(hero: Hero){
        this.selectedHero = hero;
    }
}
