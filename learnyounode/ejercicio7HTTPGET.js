let http = require("http");
let datos = process.argv.slice(2);


http.get(datos[0],function(res){
    res.setEncoding("utf8").on("data",function(data) {
        console.log(data);    
    })
    
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});


