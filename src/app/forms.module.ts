import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CompanyFormComponent } from './forms/company-form.component';

@NgModule({
  declarations: [
    CompanyFormComponent
  ],
  exports: [
    CompanyFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: []
})

export class FormModule {

}
