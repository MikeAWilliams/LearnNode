var express = require('express');
var app = express();
var mongoose = require('mongoose');
var setupRout = require('./routs/setup');
var apiRout = require('./routs/api');

if(5 != process.argv.length){
    console.log("Usage:");
    console.log("node app.js dbPath dbUser dbPassword");
    process.exit();
}

// Remember you created a user but set it to expire in 6 hours. You need to go back and make another now :)
var dbPath = process.argv[2];
var dbUser = process.argv[3];
var dbPassword = process.argv[4];

console.log(`DBPath: ${dbPath} DBUser: ${dbUser} DBPassword: ${dbPassword}`);

var connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${dbPath}?retryWrites=true&w=majority`;
console.log(connectionString);

var Schema = mongoose.Schema;
var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean
});
var Todos = mongoose.model('Todos', todoSchema);

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

setupRout(app, Todos);
apiRout(app, Todos);

var port = process.PORT || 8080;

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view_engine', 'pug');

app.listen(port);