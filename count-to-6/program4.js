let userDatos = process.argv.slice(2);
let data = {};
[data.a,data.b,data.c]=userDatos;

console.log(`{ username: '${data.b}', email: '${data.c}' }`);