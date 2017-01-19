import {Component, Input, OnChanges} from "@angular/core";
import {Hero} from "./shared/services/hero.service";

@Component({
  selector: 'hero-child',
  template: `
    <ng-content></ng-content>
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service. {{masterName}}</p>
    <input type="text" bindon-ngModel="master" />
    <input type="text" bindon-ngModel="hero.name" />
    <span (click)="changeMasterName()">Click</span>
  `
})
export class HeroChildComponent implements OnChanges{
  @Input() hero;
  @Input() master: string;

  ngOnChanges() {
    console.log('child ngOnChanges');
  }

  changeMasterName() {
    this.master = 'Raju';
  }
}
