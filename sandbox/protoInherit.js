Person.prototype.GetFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.GetAge = function() {
        return this.age;
    }
}

var bob = new Person('bob', 'doe', 47);
console.log(bob.GetFullName());
console.log(bob.GetAge());

Teacher.prototype = Object.create(Person.prototype);
function Teacher(first, last, age, subject){
    Person.call(this, first, last, age)
    this.subject = subject;
}

var mrsJohns = new Teacher('Synthia', 'Johns', '52', 'Math');
console.log(mrsJohns.GetFullName());
console.log(mrsJohns.subject);


// do something similar using util.inherits

util = require('util');

Cat.prototype.GetFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
function Cat(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.GetAge = function() {
        return this.age;
    }
}

var neco = new Cat('neco', 'ninja', 3);
console.log(neco.GetFullName());
console.log(neco.GetAge());

util.inherits(JobCat, Cat);

function JobCat(first, last, age, job){
    Cat.call(this, first, last, age);
    this.job = job;
}

var fireCat = new JobCat('Mangy', 'Furrball', '2', 'Fire Fighter');
console.log(fireCat.GetFullName());
console.log(fireCat.job);

// now use the class syntax

class Dog{
    constructor(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.GetAge = function () {
            return this.age;
        }
    }

    GetFullName() { 
        return `${this.firstName} ${this.lastName}`;
    }
}

var bowser = new Dog('Bowser', 'Bruser', 14);
console.log(bowser.GetFullName());
console.log(bowser.GetAge());

class JobDog extends Dog {
    constructor(first, last, age, job) {
        super(first, last, age);
        this.job = job;
    }
}

var fireDog = new JobDog('Scary', 'Burn', '2', 'Fire Fighter');
console.log(fireDog.GetFullName());
console.log(fireDog.job);