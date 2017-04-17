import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { TrimValueAccessorModule } from 'ng-trim-value-accessor';

import { EmployeeComponent } from './manage-employee/employee.component';

import { EmployeeService } from './shared/services/employee.service';
import { SearchComponent } from './manage-employee/search.component';

// directives
import { HighlightDirective } from './shared/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroPatentComponent,
    HeroChildComponent,
    EmployeeComponent,
    SearchComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ObservableModule,
    AlertModule,
    FormModule,
    TrimValueAccessorModule,
    ReactiveFormsModule
  ],
  providers: [
    DetailsService,
    HeroService,
    CommentService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
