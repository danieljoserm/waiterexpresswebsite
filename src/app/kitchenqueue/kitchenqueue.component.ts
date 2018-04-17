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
  order:order[]=[];
  request:request;

  constructor(private router:Router, public http :Http) {
    let DataLocal = this.http.get("http://localhost:8080/get_orders.php").map(res => res.json()).subscribe(
      
   
     data=>{
      
    this.pedidos=data;
    var cantidadpedidos=0;
    var pedido=this.pedidos[0].id_pedido;
    for (let numero = 0; numero < Object.keys(this.pedidos).length; numero++) {
      
    
        if(this.pedidos[numero].id_pedido==pedido){

       this.order[cantidadpedidos]= new order(this.pedidos[numero].id_usuario,this.pedidos[numero].id_restaurante);
       this.order[cantidadpedidos].add_productos(this.pedidos[numero].nombre,this.pedidos[numero].cantidad);
          
       // this.request[numero]= new request(this.menuseleccionados[numero].id,this.menuseleccionados[numero].cantidad); 
       
      }
      else{
       
        //this.order[cantidadpedidos].add_productos(this.pedidos[numero].nombre,this.pedidos[numero].cantidad);
        cantidadpedidos=cantidadpedidos+1;
      }
       pedido=this.pedidos[numero].id_pedido;
      console.log(cantidadpedidos); 
      console.log(this.pedidos[numero].id_pedido); 
      }
      
      console.log(this.order);  
      
   
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

  //How to insert headers on the request as a client
  let headers = new Headers({ 'Content-Type':  'application/json',
  'Access-Control-Allow-Origin': '*'
});
  let options = new RequestOptions({ headers: headers });

    var car = {restaurant_name:"Chelips", model:"500", color:"Andrea"};


this.http.post("http://localhost:8080/retrieve_menu.php",JSON.stringify(car)).subscribe(

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

export class order{
  public id_productos:request[];
  constructor(
  
    public id_usuario:any,
    public id_restaurante:any,
    
  
  ){

  this.id_productos= [];
  }
  
  public add_productos(nombre:string,cantidad:number){
    
    this.id_productos.push(new request(nombre,cantidad))

  }
  
  }

  
export class request{
  
  constructor(
  
   public nombre_producto,
   public cantidad,
  
  ){}
  
  
  }