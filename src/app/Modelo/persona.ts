export class Persona {
  nombre: String 
  apellido: String 
  constructor(nombre:string, apellido:string){
    this.nombre=nombre;
    this.apellido=apellido;
  }
  getNombre():string{
    return this.nombre;
  }
  getApellido():string{
    retunr this.apellido;
  }
}