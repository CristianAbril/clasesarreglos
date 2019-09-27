import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
  providere:[ServicioService]
})
export class SaludoComponent implements OnInit {
  mensajeSaludo : string ;
  constructor(private miSaludo: SaludoService) { }
  this.mensajeSaludo = this.miSaludo.saludar();

}