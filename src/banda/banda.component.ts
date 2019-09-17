import { Component} from '@angular/core';
import {Artistaa}  from './Artista';
import {Empresaa}  from './Empresa';

@Component({
  selector: 'app-bandas',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class Artista{
  
  artirstas:Artista[];

  constructor(){
  this.artirstas[7]=new Artistaa();
  this.artirstas[1]=new Artistaa("100","NoFeedBAck","10","1");
  this.artirstas[2]=new Artistaa("658","Shakira","8","1");
  this.artirstas[3]=new Artistaa("115","Cabas","6","2");
  this.artirstas[4]=new Artistaa("205","Beyonce","6","2");
  this.artirstas[5]=new Artistaa("326","ColdPlay","8","3");
  this.artirstas[6]=new Artistaa("107","DrKrapula","10","4");
  this.artirstas[7]=new  Artistaa("401","Juanes","2","4");

  }
  


}
export class Empresa{
    empresas:Empresa [];
    constructor(){
      this.empresas[4]=new Empresaa();

      this.empresas[1]=new  Empresaa("1","Youtube");
      this.empresas[2]=new  Empresaa("2","Itunes");
      this.empresas[3]=new  Empresaa("3","MICELULAR");
      this.empresas[4]=new  Empresaa("4","Local");
      
    }

  }