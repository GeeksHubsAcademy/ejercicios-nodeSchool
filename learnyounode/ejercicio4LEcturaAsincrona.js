let fs = require('fs');

let ruta = process.argv[2];

let sumatoria=0;

fs.readFile(ruta, function finishedReading(error, bf) {
    if (error) return console.error(error)
    let arrayTexto = bf.toString().split('\n');
    console.log(arrayTexto.length-1);
})