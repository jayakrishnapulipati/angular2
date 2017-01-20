import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommentWidgetComponent } from './observables/comment-widget.component';
import {CommentFormComponent} from "./observables/comment-form.component";
import {CommentListComponent} from "./observables/comment-list.component";
import {CommentBoxComponent} from "./observables/comment-box.component";
@NgModule({
  declarations: [
    CommentWidgetComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentBoxComponent
  ],
  exports: [
    CommentWidgetComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentBoxComponent
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
