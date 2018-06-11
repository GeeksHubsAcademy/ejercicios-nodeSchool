let nombre = process.argv[2];
let saludo = `Hello, ${nombre}!`;
let minuscula=nombre.toLowerCase();
let segundoTexto = `Your name lowercased is "${minuscula}".`;
console.log(saludo);
console.log(segundoTexto);