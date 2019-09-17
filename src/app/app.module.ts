import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {persona} from '../persona/persona.component';
import {pelicula} from '../pelicula/pelicula/pelicula.component';
import {paciente1} from '../paciente/paciente/paciente.component';
import {Bandan} from '../banda/banda.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, persona, pelicula, paciente1],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
