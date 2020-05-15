var loggerFunction = function(toLog){
    console.log('In loggerFunction');
    console.log(toLog);
};

var Get4 = function(){
    console.log('in get 4');
    return 4;
};

module.exports['logger'] = loggerFunction;
module.exports['getValue'] = Get4;