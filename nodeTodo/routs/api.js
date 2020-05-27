var bodyParser = require('body-parser');

module.exports = function(app, todoModel){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/api/todos/:username', function(request, response){
        todoModel.find({username: request.params.username}, function(error, todos){
            if(error) throw error;
            response.send(todos);
        });
    });
};