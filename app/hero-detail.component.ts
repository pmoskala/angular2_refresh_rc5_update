import {Component, Input} from '@angular/core';
import {Hero} from './Hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}