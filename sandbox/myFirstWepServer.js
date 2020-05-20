var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    console.log(`Got request: ${request}`);
    response.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/first.html');
    response.end(html);
}).listen(8080, '127.0.0.1');