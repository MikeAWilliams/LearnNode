var bodyParser = require('body-parser');

module.exports = function(app, todoModel){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/api/todos/:username', function(request, response){
        todoModel.find({username: request.params.username}, function(error, todosResult){
            if(error) throw error;
            response.send(todosResult);
        });
    });

    app.get('/api/todo/:id', function(request, response){
        todoModel.findById({ _id: request.params.id}, function(error, todoResult){
            if(error) throw error;
            response.send(todoResult);
        })
    });

    app.post('/api/todo', function(request, response){
        if(request.body.id){
            todoModel.findByIdAndUpdate(request.body.id, 
                {
                    todo: request.body.todo,
                    isdone: request.body.isdone
                }, 
                function(error, todoResult){
                    if(error) throw error;
                    response.send('item updated');
                });
        }
        else {
            var newTodo = todoModel({
                username: 'test',
                todo: request.body.todo,
                isDone: request.body.isDone
            });
            newTodo.save(function(error){
                if(error) throw error;
                response.send('new item created')
            });
        }
    });

    app.delete('/api/todo', function(request, response){
        todoModel.findByIdAndRemove(request.body.id, function(error){
            if(error) throw error;
            response.send('Item delted');
        });
    });
};