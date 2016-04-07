import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {CounterComponent} from './counter.component';
import {HighlightDirective} from './highlight.directive';

@Component({
    selector: 'my-app',
    styles: [`
	    .app {
	      display: block;
	      text-align: center;
	      padding: 25px;
	      background: #f5f5f5;
	    }
	  `],
    template: `
        <h1>My First Angular 2 App</h1>
        <courses></courses>
        <h3>One Way Binding </h3>
        <input type="text" name="firstName" [value]="firstName"/>
        <h3>Two Way Binding </h3>
        <input type="text" name="lastName" [(ngModel)]="lastName" (click)="getLastName()" />

		<h3>Conditions</h3>
        <br/><span *ngIf="flag" myHighlight>Flag is true</span>

        <div class="app">
        	<counter></counter>
        </div>
        `,
    directives: [CoursesComponent, CounterComponent, HighlightDirective]
})
export class AppComponent { 
	firstName: string = 'TypeScript with Angular2';
	lastName: string = 'Angular2';
	flag: boolean = true;

	getLastName() {
		console.log(this.lastName);
	}
}
