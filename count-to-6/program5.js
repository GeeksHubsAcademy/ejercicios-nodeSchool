let numeros=process.argv.slice(2);
let minimo=Math.min(...numeros);

console.log(`The minimum of [${numeros}] is ${minimo}`);