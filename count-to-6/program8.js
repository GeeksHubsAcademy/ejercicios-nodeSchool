module.exports=(texto="Hi",longitud=texto.length)=>{
    let exclamaciones="!".repeat(longitud);
    return `${texto}${exclamaciones}`;
}
