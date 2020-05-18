var EventEmitter = require('events');

var myEmitter = new EventEmitter();

myEmitter.on('event1', function(){
    console.log('the first event function');
});

myEmitter.on('event1', function(){
    console.log('the second event function');
});

myEmitter.on('event2', function(){
    console.log('the first event function for event 2');
});

myEmitter.emit('event1');
myEmitter.emit('event1');
myEmitter.emit('event2');
myEmitter.emit('event3');