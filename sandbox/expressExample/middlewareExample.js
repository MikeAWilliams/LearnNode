var express = require('express');
var app = express();

app.use('/assets', express.static(__dirname +'/public'));

app.use('/', function(req, res, next){
    console.log(`Request URL: ${req.url}`);
    next();
});

app.get('/', function(request, result){
    result.send('<html><link href=assets/style.css type=text/css rel=stylesheet/><head></head><body><h1>HELLO WORLD</h1></body></html>');
});


// consider express middleware passport for authentication

var port = process.env.PORT || 8080;
app.listen(port);