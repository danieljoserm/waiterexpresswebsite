import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { KitchenqueueComponent } from './kitchenqueue/kitchenqueue.component';
import { WaiterqueueComponent } from './waiterqueue/waiterqueue.component';


@NgModule({
  declarations: [
    AppComponent,
    KitchenqueueComponent,
    WaiterqueueComponent
  ],
  imports: [
    BrowserModule,MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
