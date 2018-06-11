
/*
//'use strict'
let promesa= new Promise(function(fulfill,reject){
    
})
.then(()=>{
    let error = new Error();
    onReject(error);
});

var promesa = new Promise(function(resolve, reject) {
        alert('Hola mundo!');
});

promesa.then(
    function(value) {
        alert('Hola universo!');
}).then(
    function(value) {
        alert('Hola multiuniverso!');
});
*/

let promesa = new Promise(function (fulfill,reject) {
    //console.log('Inicializamos la promesa');
    fulfill();
    reject(e1);
})
.then((valor)=>{
    onReject(valor);
    throw new Error('REJECTED!');
    //throw new Error('Algo falló');
    //console.log('Haz esto');
});
    
function onReject(error){
    setTimeout(() => {
        console.log('REJECTED!');
        //console.log('FULFILLED!');
        //reject('REJECTED!');
    }, 300);
}

