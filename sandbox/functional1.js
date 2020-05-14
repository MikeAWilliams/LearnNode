function myLog(message){
    console.log(message);
}
myLog('hi');

function doesWork(logger){
    var a = 1;
    logger(a);
    var b = 2;
    logger(b);
    var c = b + a;
    logger(c);
}

doesWork(myLog);

var functionExpressionLogger = function(message){
    console.log('fe' + message);
}

doesWork(functionExpressionLogger);