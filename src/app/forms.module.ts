import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompanyFormComponent } from './forms/company-form.component';
import { EmployeeFormComponent } from "./forms/employee-form.component";


@NgModule({
  declarations: [
    CompanyFormComponent,
    EmployeeFormComponent
  ],
  exports: [
    CompanyFormComponent,
    EmployeeFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: []
})

export class FormModule {

}
