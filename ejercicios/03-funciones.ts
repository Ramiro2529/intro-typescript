
/*
    ===== Código de TypeScript =====
*/
function sumar(a:number,b:number):number{
    return (a+b);
} 

const sumarFleha=(a:number,b:number):number => {

    return a+b;
}

function multiplicar(numero:number, otroNumero?:number, base:number=2):number{

    return numero+base;
}

const resultado=sumar(2,2);
const res2=multiplicar(5,0,10)
console.log(resultado)
console.log(res2)

//Clase tonta 
interface Personaje{
nombre:string,
pv:number
} 

function curar(personaje:Personaje, puntosVida:number){

    personaje.pv+=puntosVida;
    console.log("puntos de vida", personaje.pv)
}

//Creacion de un nuevo objeto(nuevoPersonaje) de tipo Personaje
const nuevoPersonaje:Personaje={

    nombre:'Ramiro',
    pv:50
}

curar(nuevoPersonaje,4)

