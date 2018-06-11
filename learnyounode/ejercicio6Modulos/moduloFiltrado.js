let fs = require('fs');

module.exports = function (ruta,extension,callback){
    fs.readdir(ruta, function(error,lista){
        
        if (error!==null) {
            callback(error,null);
            return;
        }else{
            let listaFiltrada = [];
            lista.forEach(archivo => {
                if (archivo.substr(archivo.length-3)===extension) {
                    listaFiltrada.push(archivo);
                }
            });
            callback(null,listaFiltrada);
            return;
        }
        
    });
}
