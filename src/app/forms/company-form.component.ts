import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html'
})

export class CompanyFormComponent implements OnInit{
  company = {};
  countries;

  saveCompanyInfo() {
    console.log(this.company);
  }

  ngOnInit() {
    this.countries = [
      {key: 'US', value:'US'},
      {key: 'CA', value:'CA'}
    ]
  }
}
