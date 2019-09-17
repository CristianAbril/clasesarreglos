import { Component} from '@angular/core';
import {Bandass}  from './bandass' ;

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent {
  banda1: Bandass;
  banda2: Bandass;
  banda3 :Bandass;

  constructor(){
   this.banda1 =new Bandass("Harry","descpripcion", "xx");
   this.banda2 =new Bandass("Harry", "descpriocin", "xx");
   this.banda3 =new Bandass("Harry3","descripcion", "xx");

  }
}