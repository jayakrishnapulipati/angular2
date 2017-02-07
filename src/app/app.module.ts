import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroPatentComponent} from "./hero-parent.component";
import {HeroChildComponent} from "./hero-child.component";
import {DetailsService} from './shared/services/details.service';
import {HeroService} from "./shared/services/hero.service";

import { ObservableModule } from './observable.module';
import { FormModule } from './forms.module';

import {CommentService} from "./shared/services/comment.service";

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeroPatentComponent,
    HeroChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ObservableModule,
    AlertModule,
    FormModule
  ],
  providers: [
    DetailsService,
    HeroService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
