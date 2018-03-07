import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { Router} from '@angular/router';
import {HttpModule,Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { templateJitUrl } from '@angular/compiler';

import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
@Component({
  selector: 'app-kitchenqueue',
  templateUrl: './kitchenqueue.component.html',
  styleUrls: ['./kitchenqueue.component.css']
})
export class KitchenqueueComponent implements OnInit {

  pedidos : any;
  menu : any;

  constructor(private router:Router, public http :Http) {
    let DataLocal = this.http.get('http://localhost:8080/consultar_pedido.php').map(res => res.json()).subscribe(
      
   
     data=>{
   
    this.pedidos=data;
     
   
   console.log(this.pedidos);
   
 
         },
         err=>{
       console.log("no funciono");
   
        }
       
       
       );
   
   
       









   }


   insertdata(){

    //const httpOptions = {
     // headers: new HttpHeaders({
        //'Access-Control-Allow-Origin': '*'  
        //'Content-Type':  'application/json',
       // 'Authorization': 'my-auth-token'
      //      })
  //  };


  let headers = new Headers({ 'Content-Type':  'application/json',
  'Access-Control-Allow-Origin': '*'

});
  let options = new RequestOptions({ headers: headers });
    var car = {type:"Andreadsfd", model:"500", color:"Andrea"};


this.http.post("http://localhost:8080/consultar_menu.php",JSON.stringify(car)).subscribe(

data=>{
  this.menu=JSON.parse(data.text());

console.log(this.menu);

},

err=>{
  console.log("no funciono");

   }

)


   }

  ngOnInit() {
  }


goback(){



}


}
//prueba git