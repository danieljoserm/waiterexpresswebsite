import { RestService } from './../../providers/RestService';
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
  restaurant:restaurant;
  constructor(private router:Router, public http :Http,public RestService : RestService) {
    console.log(this.RestService.GetChosenRestaurant());

    this.restaurant=new restaurant(this.RestService.GetChosenRestaurant());

    
    let DataLocal = this.http.post("http://localhost:8080/get_orders.php",JSON.stringify(this.restaurant)).map(res => res.json()).subscribe(
      
   
     data=>{
      
    this.pedidos=data;
    console.log("vea la vara");
    console.log(this.pedidos);
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

  export class restaurant{

constructor(
public restaurant_id


){}


  }