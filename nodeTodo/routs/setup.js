module.exports = function(app, todoSchema){
    app.get('/api/setupTodos', function(request, result){
        var starterTodos = [
            {
                username: 'test',
                todo: 'learn node',
                isdone: false
            },
            {
                username: 'test',
                todo: 'learn type script',
                isdone: false
            },
        ];
        todoSchema.create(starterTodos, function(error, mongooseResults){
            result.send(mongooseResults);
        });
    });
}