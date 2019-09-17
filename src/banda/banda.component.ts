import { Component} from '@angular/core';
import {Bandass}  from './bandass' ;

@Component({
  selector: 'app-bandas',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class Bandan{
  banda1: Bandass;
  banda2: Bandass;
  banda3: Bandass;
  banda4: Bandass;
  banda5: Bandass;
  

  constructor(){
   this.banda1 =new Bandass("IDEmpresa","1","2","3");
   this.banda2 =new Bandass("Empresa", "Youtube","");
   this.banda3 =new Bandass("IDArtista","100");
  this.banda4 =new Bandass("Artista","NoFeedBack");
  this.banda5 =new Bandass("Cantidad de Artistas","10");


  }
}