import { Injectable } from '@angular/core';
import {Persona} from '../odelo/persona';

@Injectable()
export class ServicioService {
  persona:Persona;
  saludar():string{
    return "Hola mundo"+this.persona.getNombre+" "+this.persona.getApellido;
  }
  constructor() { 
    this.persona=new Persona("Cristian", "Abril");
  }

}