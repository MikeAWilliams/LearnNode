var loggerFunction = function(toLog){
    console.log('In loggerFunction');
    console.log(toLog);
};

var Get4 = function(){
    console.log('in get 4');
    return 4;
};

// this syntax works but is anoying to type
//module.exports['logger'] = loggerFunction;
//module.exports['getValue'] = Get4;

module.exports = {
    logger: loggerFunction,
    getValue: Get4
};