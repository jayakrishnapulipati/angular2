import {Component, Input} from "@angular/core";
import {Hero} from "./shared/services/hero.service";

@Component({
  selector: 'hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service.</p>
  `
})
export class HeroChildComponent {
  @Input() hero;
  @Input('master') masterName: string;
}
