module.exports=function average(...args){
    let promedio;
    let cantidadValores=args.length;
    let suma=0;
    for (let i = 0; i < cantidadValores; i++) {
        suma+=args[i];
    }
    return promedio=suma/cantidadValores;
};