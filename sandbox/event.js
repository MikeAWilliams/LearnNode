function  EventSet(){
    this.events = {};
}

EventSet.prototype.on = function(event, method){
    this.events[event] = this.events[event] || [];
    this.events[event].push(method);
}

EventSet.prototype.trigger = function(event){
    if(this.events[event]){
        this.events[event].forEach(function(method){
            method();
        });
    }
}

module.exports = EventSet;