let datos = process.argv.slice(2);
let usuario=datos[0];
let comentario=datos[1];


/*

let caracteresReemplazar=['&','<','>','"'];
let caracteresAColocar=['&amp','&lt','&gt','&quot'];

let usuarioFinal =(usuario)=>usuario.replace(caracteresReemplazar,caracteresAColocar);
let comentarioFinal =(comentario)=>comentario.replace(caracteresReemplazar,caracteresAColocar);
usuario.replace('&','&amp').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;');
comentario.replace('&','&amp').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;');
function sustitucion(cadena){
    let modificado = cadena;
    modificado.replace('&','&amp');
    console.log(modificado);
    
    modificado.replace("'",'&apos');
    console.log(modificado);
    
    modificado.replace('<', '&lt;');
    console.log(modificado);
    
    modificado.replace('>', '&gt;');
    console.log(modificado);
    
    modificado.replace('"', '&quot;');
    
    return modificado;
}
let usuarioFinal = sustitucion(usuario);
let comentarioFinal = sustitucion(comentario);
*/

/*
*/


//let sustituido5 = sustituido4.replace("'",'&apos');
let usuario1 = usuario.replace('&','&apos');
let usuario2 = usuario1.replace('<', '&lt;');
let usuario3 = usuario2.replace('>', '&gt;');
let usuario4 = usuario3.replace('"', '&quot;');

let comentario1 = comentario.replace('&','&apos');
let comentario2 = comentario1.replace('"', '&quot;');
let comentario3 = comentario2.replace('<', '&lt;');
let comentario4 = comentario3.replace('<', '&lt;');
let comentario5 = comentario4.replace('>', '&gt;');

console.log(`<b>${usuario4} says</b>: "${comentario5}"`);