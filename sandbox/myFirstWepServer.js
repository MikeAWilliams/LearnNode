var http = require('http');

http.createServer(function(request, response){
    console.log(`Got request: ${request}`);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!\n');
}).listen(8080, '127.0.0.1');