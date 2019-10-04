export class Persona {
nombre: string ;
RH: string;
sexo: string; 
estadocivil: string;
boleano: boolean;
idpublico: string;

lista= 


constructor(nombre: string, RH: string,sexo: string, estadocivil: string,boleano: boolean,idpublico: string){

this.nombre=nombre;
this.RH=RH;
this.sexo=sexo;
this.estadocivil=estadocivil;
this.boleano=boleano;
this.idpublico=idpublico;
}

 getidpublico():string{
    return this.idpublico+" "+this.RH+" "+this.sexo+" "+this.estadocivil+" "+this.boleano+" ";
  }

}