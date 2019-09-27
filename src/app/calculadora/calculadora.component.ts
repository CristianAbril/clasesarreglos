import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
  providers[CalculadoraService]
})
export class CalculadoraComponent implements OnInit {

  constructor(private calculadora: CalculadoraService) { }

  ngOnInit() {
  }
  sumar():void{
this.resultado= this.calculadora.sumar(this.a,this.b)

  }
}