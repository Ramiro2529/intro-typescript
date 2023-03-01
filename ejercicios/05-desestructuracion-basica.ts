import { SourceMapDevToolPlugin } from "webpack"

/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
volumen:number,
segundo:number,
cancion:string,
detalles:Detalles
}

interface Detalles{
     autor:string,
     anio:string
}

const reproductor1:Reproductor={
    volumen:5,
    segundo:30,
    cancion:"Rest my chemestry",
    detalles:{
        anio:'2010',
        autor:'Interpol'
    }
}

//destructuracion del objeto reproductor1
const {volumen,segundo,cancion, detalles}=reproductor1;
const {autor}=detalles;

//console.log('el volumen actual es: ',volumen);
//console.log('el segundo actual es: ',segundo);
//console.log('la cancion actual es: ',cancion);
//console.log('el autor actual actual es: ',autor);

const personajesDragonBall:string[]=['Goku','Vegeta','Trunks'];
const [p1,p2,p3]=personajesDragonBall;

console.log('Personaje 1: ', p1)
console.log('Personaje 2: ', p2)
console.log('Personaje 3: ', p3)



