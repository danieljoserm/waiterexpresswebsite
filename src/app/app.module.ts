import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { KitchenqueueComponent } from './kitchenqueue/kitchenqueue.component';
import { WaiterqueueComponent } from './waiterqueue/waiterqueue.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {HttpModule,Http} from '@angular/http';

import { RequestOptions } from '@angular/http';
import { FeatureselectorComponent } from './featureselector/featureselector.component';
const appRoutes: Routes = [
 
 
  { path: '', component: MainpageComponent },
  {path:'kitchenqueue',component:KitchenqueueComponent
},{path:'waiterqueue',component:WaiterqueueComponent},
{path:'mainpage',component:MainpageComponent},
{path:'featureselector',component:FeatureselectorComponent}
//  { path: 'hero/:id',      component: HeroDetailComponent },
//  {
 //   path: 'heroes',
  //  component: HeroListComponent,
  //  data: { title: 'Heroes List' }
 // },
 // { path: '',
  //  redirectTo: '/heroes',
  //  pathMatch: 'full'
 // },
//  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    
    AppComponent,
    KitchenqueueComponent,
    WaiterqueueComponent,
    MainpageComponent,
    FeatureselectorComponent
  ],
  imports: [
    
    HttpModule,
    MatCardModule,MatListModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
