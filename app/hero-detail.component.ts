import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls:['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    
    hero;

    constructor(
        private _heroService: HeroService,
        private _route: ActivatedRoute
    ) {
        
    }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) =>
        {
            let id = +params['id'];
            this._heroService.getHero(id)
                .then(hero => this.hero =hero);
        })
    }
    goBack(): void {
        window.history.back();
        }

}