let valores = process.argv.slice(2);

let suma=0;
valores.forEach(numero => {
    suma+=parseInt(numero);
});
console.log(suma);

