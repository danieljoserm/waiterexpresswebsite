import {Injectable} from '@angular/core';


@Injectable()
export class RestService{


private chosenRest:String="pedo";

constructor(){
} 


ChosenRestaurant(chosenRest:any)
{
this.chosenRest=chosenRest;

}

GetChosenRestaurant(){

return this.chosenRest;

}



}