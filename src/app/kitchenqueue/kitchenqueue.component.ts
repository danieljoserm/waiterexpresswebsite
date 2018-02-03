import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { Router} from '@angular/router';
import {HttpModule,Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { templateJitUrl } from '@angular/compiler';
@Component({
  selector: 'app-kitchenqueue',
  templateUrl: './kitchenqueue.component.html',
  styleUrls: ['./kitchenqueue.component.css']
})
export class KitchenqueueComponent implements OnInit {

  pedidos : any;


  constructor(private router:Router, public http :Http) {
    let DataLocal = this.http.get('assets/fakeinfo/menu.json').map(res => res.json()).subscribe(
      
   
     data=>{
   
    this.pedidos=data;
     console.log(this.pedidos);
   
 
         },
         err=>{
       console.log("no funciono");
   
        }
       
       
       );
   
   
       









   }

  ngOnInit() {
  }


goback(){



}


}
//prueba git