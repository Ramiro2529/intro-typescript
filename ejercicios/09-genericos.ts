

/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento:T){

    return argumento
}

let soyStirng=queTipoSoy('soy string')
let soyNumero=queTipoSoy(4)
let soyExplicito=queTipoSoy<number>(2)
