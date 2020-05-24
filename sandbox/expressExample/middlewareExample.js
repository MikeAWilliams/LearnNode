var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname +'/public'));

app.use('/', function(req, res, next){
    console.log(`Request URL: ${req.url}`);
    next();
});

app.get('/', function(request, result){
    result.render('index');
});

app.get('/person', function(request, result){
    result.render('person', {ID: request.params});
});

app.get('/person/:id', function(request, result){
    result.render('person', {ID: request.params.id});
});

// consider express middleware passport for authentication
// consider template view engine

var port = process.env.PORT || 8080;
app.listen(port);