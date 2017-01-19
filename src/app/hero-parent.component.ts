import {Component, OnInit} from "@angular/core";
import {DetailsService} from "./shared/services/details.service";
import {HeroService, Hero} from "./shared/services/hero.service";

@Component({
  selector: 'hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <hero-child *ngFor="let hero of heroes"
        [hero]="hero"
      >
    </hero-child>
  `
})

export class HeroPatentComponent implements OnInit{
  heroes: Hero[];
  master: string = 'Master';
  constructor(private details:DetailsService, private heroService: HeroService){}

  ngOnInit() {
    // this.heroes = this.details.getDetails()
    this.heroes = this.heroService.getHeroes();
  }
}
