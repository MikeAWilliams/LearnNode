var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended:false});

var jsonParser = bodyParser.json();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname +'/public'));

app.use('/', function(req, res, next){
    console.log(`Request URL: ${req.url}`);
    next();
});

app.get('/', function(request, result){
    result.render('index');
});

app.post('/person', urlencodedParser, function(request, result){
    result.send('Thank you!');
    console.log(request.body.firstname);
    console.log(request.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res){
    res.send('Thank you for the json data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/person/:id', function(request, result){
    result.render('person', {ID: request.params.id, Qstr: request.query.name});
});

// consider express middleware passport for authentication
// consider template view engine

var port = process.env.PORT || 8080;
app.listen(port);