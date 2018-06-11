let fs = require('fs');

module.exports = function (ruta,extension,callback){
    fs.readdir(ruta, function(error,lista){
    
        if (error!==null) {
            return callback(error);
            return console.error(error);
        }
    
        lista.forEach(archivo => {
            if (archivo.substr(archivo.length-3)===extension) {
                console.log(archivo);
            }
        });
        //callback('correcto');
    });

}
