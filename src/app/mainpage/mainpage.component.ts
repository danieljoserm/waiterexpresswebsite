import { RestService } from './../../providers/RestService';
import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {HttpModule,Http} from '@angular/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  restaurants:any;
  constructor(public http :Http,public RestService : RestService,) {

    

    let DataLocal = this.http.get("http://localhost:8080/retrieve_restaurants.php").map(res => res.json()).subscribe(
      
   
     data=>{
      
      this.restaurants=data;
      console.log(this.restaurants);



     },
     error=>{



     } );
      


    
   }

  ngOnInit() {
  }



chooserestaurant(chosenrestaurant:any){

this.RestService.ChosenRestaurant(chosenrestaurant);


 }



}
