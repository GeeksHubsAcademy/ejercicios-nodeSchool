const bl=require('bl')
let fs=require('fs');
let http = require("http");
let urls=process.argv.slice(2);
var datos=[];

for (let i = 0; i < urls.length; i++) {
    http.get(urls[i],function(res){
        res.setEncoding("utf8").pipe(bl(function(err,data){
            console.log(data.toString());
            datos[i]=data.toString();
        }));
        
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
    
}
/*
urls.forEach(url => {
    
    http.get(url,function(res){
        res.setEncoding("utf8").pipe(bl(function(err,data){
            console.log(data.toString());
            datos.push(data.toString());
        }));
        
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
});
*/

datos.forEach(dato => {
    console.log(dato);
});


