let net = require('net');
let puerto = process.argv[2];
let date = new Date();

//console.log(puerto);
//console.log(date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes());



let server = net.createServer(function (socket){
    socket.write(date.getFullYear()+'-0'+(date.getMonth()+1)+'-'+date.getDate()+' 0'+date.getHours()+':'+date.getMinutes()+'\n');
    socket.write("");
    //socket.write('');
    socket.end();
});
server.listen(puerto);
//console.log(date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes());n