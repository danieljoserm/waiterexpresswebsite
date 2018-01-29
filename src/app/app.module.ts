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

const appRoutes: Routes = [
 
 
  { path: '', component: MainpageComponent },
  {path:'kitchenqueue',component:KitchenqueueComponent}
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
    MainpageComponent
  ],
  imports: [
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
