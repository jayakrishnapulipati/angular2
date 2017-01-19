import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroPatentComponent} from "./hero-parent.component";
import {HeroChildComponent} from "./hero-child.component";
import {DetailsService} from './shared/services/details.service';
import {HeroService} from "./shared/services/hero.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroPatentComponent,
    HeroChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DetailsService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
