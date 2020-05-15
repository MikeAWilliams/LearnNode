var myModule = require('./myModule.js');

myModule['logger'](myModule['getValue']());
// maybe more normal way to do it
myModule.logger(myModule.getValue());