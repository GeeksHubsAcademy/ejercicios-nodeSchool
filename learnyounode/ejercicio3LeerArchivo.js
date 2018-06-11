let fs = require('fs');

let bf = fs.readFileSync(process.argv[2]);

let arrayTexto = bf.toString().split('\n');

console.log(arrayTexto.length-1);
