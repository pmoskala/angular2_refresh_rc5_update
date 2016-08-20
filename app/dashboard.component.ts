import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import { HeroService} from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']

})
export class DashboardComponent implements OnInit{
    heroes:  Hero[] = [];

    constructor(private _heroService: HeroService,
                private _router: Router
    ) {
        
    }

    ngOnInit(): void{
        this._heroService.getHeroes()
            .then(resoult => this.heroes = resoult.slice(1,5));
    }

    gotoDetail(hero: Hero): void{
        let link = ['/detail', hero.id];
        this._router.navigate(link);
        }
}