import {
  Component, OnInit, AfterContentChecked, ContentChild, AfterContentInit, DoCheck,
  OnChanges
} from "@angular/core";
import {DetailsService} from "./shared/services/details.service";
import {HeroService, Hero} from "./shared/services/hero.service";
import {HeroChildComponent} from "./hero-child.component";

@Component({
  selector: 'hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <hero-child *ngFor="let hero of heroes"
        [hero]="hero"
        [master]="master"
      >
    </hero-child>
  `
})

export class HeroPatentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked{
  heroes: Hero[];
  master: string = 'Master';
  constructor(private details:DetailsService, private heroService: HeroService){}

  ngOnInit() {
    // this.heroes = this.details.getDetails()
    this.heroes = this.heroService.getHeroes();
  }

  ngOnChanges() {
    console.log('parent ngOnChanges');
  }

  ngDoCheck() {
    console.log('changes were done', this);
  }

  @ContentChild(HeroChildComponent) contentChild: HeroChildComponent;

  ngAfterContentInit() {
    console.log('child component was initialized');
  }

  ngAfterContentChecked() {
    console.log('child component was checked');
    console.log('sdfsdf', this.master);
  }
}
