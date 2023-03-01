
/*
    ===== Código de TypeScript =====
*/

let habilidades:string[]=['bash','counter'];

interface Persona{
    nombre:string,
    hp:number,
    habilidades:string[],
    puebloNatal?:string
}

const persona:Persona={

    nombre:'Ramiro',
    hp:100,
    habilidades:['correr'],
    puebloNatal:'CDMX'
    
};

console.log(persona)
console.table(persona)