let fs = require('fs');
let datos = process.argv.slice(2);

fs.readdir(datos[0], function(error,lista){

    if (error) {return console.error(error);}

    lista.forEach(archivo => {
        if (archivo.substr(archivo.length-3)===`.${datos[1]}`) {
            console.log(archivo);
        }
    });
});