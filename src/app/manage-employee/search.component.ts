import {Component, Input, Output, EventEmitter} from '@angular/core';
import {userInfo} from "os";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styles: [`
    .searchbox
    {
      position:relative;
      margin-top:1%;
      margin-bottom:2%;
      margin-right: 2%;
    }
    .searchbox input{
      padding-left: 30px;
      border-radius: 15px;
      border: 1px #B3BDC7 solid;
      padding: 5px 5px 5px 25px;
      color: #B3BDC7;
    
    }
    .searchbox .search-icon{
      position:absolute;
      color:#B3BDC7;
      top:10px;
      left:5px;
    
    }
  `]

})
export class SearchComponent {
  @Input() employeeData;
  @Output() notify = new EventEmitter();
  bool: boolean;

  filterEmployeeData(input) {
    this.bool = input.length > 0;
    var temp = this.employeeData.filter(function (employee) {
      if (employee.EmployeeName.toLowerCase().includes(input.toLowerCase())) {
        return employee;
      }
    });

    this.notify.emit({data: input.length > 0 ? temp : [], bool: this.bool});
  }
}
