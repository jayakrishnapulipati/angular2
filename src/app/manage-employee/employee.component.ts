import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.css']
})
export class EmployeeComponent implements OnInit {
    userInput:any;
    isChecked:boolean;
    employeeData:any = [];
    mainEmployeeData: any = [];

    itemsPerpage:number = 5;
    incrementCount:number = 5;
    isFromSearch: boolean = false;
    constructor(private employeeService: EmployeeService) {

    }

    ngOnInit() {
        this.employeeData = [
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "JK"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "Sravni"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "Sravni"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "JK"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "JK"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "Sravni"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "Sravni"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "JK"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "JK"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "Sravni"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "Sravni"
            },
            {
                "Position": "Senior Manager",
                "Status": "Active",
                "Department": "Development",
                "Location": "Hyderabad",
                "ServiceDate": "2017-03-13",
                "EmployeeName": "JK"
            }
        ];
        this.mainEmployeeData = Object.assign(this.employeeData);
        this.employeeData = this.employeeData.slice(0, this.itemsPerpage);
    }

    showMore() {
        let temp = this.mainEmployeeData.slice(this.employeeData.length, this.employeeData.length + this.incrementCount);
        this.employeeData = this.employeeData.concat(temp);
    }

    filterTerminatedEmployees() {
        return this.mainEmployeeData.filter(function (employee) {
            return employee.Status === 'Active';
        });
    }

    showTerminatedEmployees(value) {
        this.employeeData = value ? this.filterTerminatedEmployees() :  this.employeeData;
        this.employeeData = this.employeeData.slice(0, this.itemsPerpage);
    }

    filteredEmployeeData(obj) {
        this.isFromSearch = obj.bool;
        if (obj.bool && obj.data.length) {
          this.mainEmployeeData = obj.data;
          this.employeeData = obj.data.slice(0, this.itemsPerpage);
        }

        if (obj.bool && obj.data.length === 0) {
          this.employeeData = [];
          this.mainEmployeeData = [];
        }

        if (!obj.bool){
          this.ngOnInit();
        }
    }
}
