import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CompanyFormComponent } from './forms/company-form.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    CompanyFormComponent
  ],
  exports: [
    CompanyFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MyDatePickerModule
  ],
  providers: []
})

export class FormModule {

}
