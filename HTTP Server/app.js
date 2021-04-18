
const http = require('http')
const server = http.createServer((req, rec)=>{
    if(req.url==='/'){
        rec.write('Hello World');
        rec.end();
    }
    if(req.url==='/api/course'){
        rec.write(JSON.stringify([1,3,4,5]));
        rec.end();
    }
});

// server.on('connetion',(socket)=>{
//     console.log('New connection....')
// });
server.listen(3000);

console.log('Listening on a port 3000....')