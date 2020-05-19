var fs = require('fs');
var greetFile = fs.readFile(__dirname + '/greetFile.txt', 'utf8', 
    function(error, fileContents){
        if(error)
        {
            console.log(error);
            return;
        }
        console.log('\nasync file read complete \n')
        console.log(fileContents + '\n');
});
// no matter how long my loop, the callback happens after. There is probably a keyword here I need
var i;
for(i = 0; i < 40; ++i){
    console.log(i + 'doing other thingst that might happen before the file is read');
}

// now lets read it as a file stream. Because this is async it can get interupted by the async above
var fileStream = fs.createReadStream(__dirname + '/greetFile.txt', { encoding: 'utf8', highWaterMark: 6});
fileStream.callCount = 0;
fileStream.on('data', function(chunk){
    this.callCount++;
    console.log(`new chunk ${this.callCount}: ${chunk}`);
});