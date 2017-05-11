import {Component, PipeTransform, Pipe} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  oneway = 'one way binding';

  twoway = 'Two way binding';

  color: String = 'yellow';

  data: Array<any> = [];

  public items = [1];

  earningCodes = [1, 2, 3, 4, 5];

  add() {
    this.items.push(this.items.length + 1);
  }

  changeValue(value) {
    console.log(value);
  }

  changeTwoWay(value) {
    console.log(value);
  }

  showValues() {
    console.log('values, ', this.oneway);
    this.oneway = 'clicked';
  }
}
/**
 * http://stackoverflow.com/questions/34456430/ngfor-doesnt-update-data-with-pipe-in-angular2
 * for to notice the diff between stateless and statefull pipes.
 */

@Pipe({name: 'arrayDiff', pure: false})
export class ArrayDiffPipe implements PipeTransform {
  transform(array: Array<any>, diff: Array<any>): Array<any> {
    var i, item,
      newArray = [],
      exception = Array.prototype.slice.call(arguments, 2);
    if (array && Array.isArray(array)) {
      for (i = 0; i < array.length; i++) {
        item = array[i];
        if (diff.indexOf(item) < 0 || exception.indexOf(item) >= 0) {
          newArray.push(item);
        }
      }
    }
    console.log(newArray, "newArray");
    return newArray;

  }
}
