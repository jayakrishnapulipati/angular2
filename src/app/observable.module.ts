import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommentWidgetComponent } from './observables/comment-widget.component';
import {CommentFormComponent} from "./observables/comment-form.component";
@NgModule({
  declarations: [
    CommentWidgetComponent,
    CommentFormComponent
  ],
  exports: [
    CommentWidgetComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [

  ]
})

export class ObservableModule{

}
