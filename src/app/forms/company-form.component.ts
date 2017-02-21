import {Component, OnInit} from '@angular/core';
import {IMyOptions} from 'mydatepicker';

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html'
})

export class CompanyFormComponent implements OnInit{
  company = {};
  countries;
  isEmties;

  private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'yyyy-mm-dd',
        showTodayBtn: true, // default value is true it shows up Today
        todayBtnTxt: 'Todayy',
        disableUntil: {year: 2017, month: 2, day: 20},  // Disable dates backward starting from the given date. 
        disableSince: {year: 2017, month: 2, day: 22}  // Disable dates forward starting from the given date. 
  };
  private model: Object = { date: { year: 2017, month: 2, day: 24 } };

  saveCompanyInfo() {
    console.log(this.company);
  }

  ngOnInit() {
    this.countries = [
      {key: 'US', value:'US'},
      {key: 'CA', value:'CA'}
    ]
  }

  validateForEmptySpaces(val) {
    this.isEmties = val.trim().length === 0 ? true : false;
  }
}
