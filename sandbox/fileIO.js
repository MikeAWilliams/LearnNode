var fs = require('fs');
var greetFile = fs.readFile(__dirname + '/greetFile.txt', 'utf8', 
    function(error, fileContents){
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log(fileContents);
        }
});