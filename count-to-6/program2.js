let entradas = process.argv.slice(2);
var result = entradas.map(entradas=>entradas.charAt(0))
            .reduce((a, b)=>a + b);
console.log(`[${entradas}] becomes "${result}"`);
//console.log(result);
