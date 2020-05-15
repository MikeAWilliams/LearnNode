var EventSet = require('./event');

var set1 = new EventSet();

set1.on('thing', function(){
    console.log("the first thing function");
});

set1.on('thing', function(){
    console.log("the second thing function");
});

set1.trigger('thing');