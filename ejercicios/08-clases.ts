

/*
    ===== Código de TypeScript =====
*/

class Person{

    private sexo:string;
    constructor(sexo:string){
        this.sexo=sexo;
    }

    public setSexo(sexo:string):void{
        this.sexo=sexo;
    }
}

class Jugador extends Person{

    private posicion:string;
    private nombre:string;
    private edad:string
    constructor(edad:string, nombre:string, posicion:string, sexo:string){
        super(sexo)
        this.edad=edad
        this.nombre=nombre
        this.posicion=posicion
 
    }


    public setEdad(edad:string):void{
        this.edad=edad;
    }

    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }
    public setPosicion(posicion:string):void{
        this.posicion=posicion;
    }

   
}


const jugador1=new Jugador('','','','');
jugador1.setEdad('25')
jugador1.setNombre('Ramiro')
jugador1.setPosicion('medio')
jugador1.setSexo('M')

const jugador2=new Jugador('25','Ambriz','Delantero','Masculino');



console.log(jugador1)
console.log(jugador2)