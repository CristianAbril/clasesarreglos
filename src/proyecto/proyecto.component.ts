import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  nombre : string ;
  apellido: string;
  fechanacimiento: string;
  estadocivil: string;


  constructor() { }
    this.nombre="Carlitos";
    this.apellido="Torres";
    this.edad=18;
    this.estadocivil="soltero";
  ngOnInit() {
  }

}