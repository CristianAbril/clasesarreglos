import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {vincularService }from '../servicios/vincular.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers:[vincularService]
})
export class PersonaComponent implements OnInit {
iddocumento: string
idpersona: string
  
  constructor() { }

  ngOnInit() {
  }

vincular():void{
 this.calculadora.sumar(this.a,this.b)
  }

}