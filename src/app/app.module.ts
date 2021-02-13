import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { gymnastComponent} from './gymnast.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {Routes} from '@angular/router';

import { addAthlete} from './addAthlete';

const appRoutes: Routes=[{path:'addAthlete',component:addAthlete}]

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, gymnastComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
