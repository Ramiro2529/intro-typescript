
/*
    ===== Código de TypeScript =====
*/
interface Heroe{
nombre:string,
edad:number,
direccion:Direccion,
mostrarDireccion():string

}

interface Direccion{
    calle:string,
    pais:string,
    ciudad:string
}

const superHeroe:Heroe={

    nombre:'Batman',
    edad:40,
    direccion:{
        calle:'nigma',
        pais:'USA',
        ciudad:'Gotham'
    },
    mostrarDireccion(){
        return this.nombre+ ', '+ this.direccion.ciudad+', '+ this.direccion.pais;
    }
}

const direccion=superHeroe.mostrarDireccion();
console.log(direccion)
