var myModule = require('./myModule.js');

myModule['logger'](myModule['getValue']());
// normal way to do it
myModule.logger(myModule.getValue());