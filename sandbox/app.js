var a = 1;
var b = 2;
var c = a + b;

console.log(c);

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'Doe');
console.log(john.firstname + ' ' + john.lastname);
john.greet();