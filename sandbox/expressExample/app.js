var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('<html><head></head><body><h1>HELLO WORLD</h1></body></html>')
});

app.get('/api', function(request, response) {
    response.json({ firstname:'John', lastname:'Doe' });
});

var port = process.env.PORT || 8080;
app.listen(port);