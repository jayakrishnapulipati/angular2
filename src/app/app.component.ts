import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  oneway = 'one way binding';

  twoway = 'Two way binding';

  changeValue(value) {
    console.log(value);
  }

  changeTwoWay(value) {
    console.log(value);
  }
}
