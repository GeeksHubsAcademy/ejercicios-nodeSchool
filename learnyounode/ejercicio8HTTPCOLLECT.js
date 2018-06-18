const bl=require('bl')
let fs=require('fs');
let http = require("http");
let url=process.argv[2];

http.get(url,function(res){
    res.setEncoding("utf8").pipe(bl(function(err,data){
        console.log(data.toString().length);
        
        console.log(data.toString());
        
    }));
   
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});








