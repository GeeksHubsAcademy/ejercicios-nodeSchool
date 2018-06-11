let rutaObtenida = process.argv[2];
let extension = `.${process.argv[3]}`;
let moduloImportado = require('./moduloFiltrado.js');

let listado = moduloImportado(rutaObtenida,extension,undefined);
