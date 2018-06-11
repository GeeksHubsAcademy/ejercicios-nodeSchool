//require('es6-promise');

let promesa = new Promise(function (fulfill,reject) {
  //console.log('Inicializamos la promesa');
    fulfill();
    setTimeout(() => {
    console.log('FULFILLED!');
    }, 300);
})
.then(()=>{
    throw new Error('Algo falló');
    //console.log('Haz esto');
});
