let rutaObtenida = process.argv[2];
let extension = `.${process.argv[3]}`;
let moduloImportado = require('./moduloFiltrado.js');

function imprimir(a,b){    
    if(typeof b==='object'){
        b.forEach(elemento => {
            console.log(elemento);
        });
    }else{
        console.log(a);
    }
}

let listado = moduloImportado(rutaObtenida,extension,imprimir);
