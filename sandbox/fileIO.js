var fs = require('fs');
var greetFile = fs.readFile(__dirname + '/greetFile.txt', 'utf8', 
    function(error, fileContents){
        if(error)
        {
            console.log(error);
            return;
        }
        console.log('\n\n\n' + fileContents + '\n\n\n');
});
// no matter how long my loop, the callback happens after. There is probably a keyword here I need
var i;
for(i = 0; i < 40; ++i){
    console.log(i + 'doing other thingst that might happen before the file is read');
}