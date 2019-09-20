import { Component, OnInit } from '@angular/core';
import {Empresaa}  from './Empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {

  constructor() { }

}
export class Empresa1{
    empresas:Empresaa[];
    constructor(){
      this.empresas=new Empresaa[4]();

      this.empresas[1]=new  Empresaa("1","Youtube");
      this.empresas[2]=new  Empresaa("2","Itunes");
      this.empresas[3]=new  Empresaa("3","MICELULAR");
      this.empresas[4]=new  Empresaa("4","Local");
      
    }

  }