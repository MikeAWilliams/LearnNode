var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    console.log(`Got request: ${request}`);
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/first.html').pipe(response);
}).listen(8080, '127.0.0.1');