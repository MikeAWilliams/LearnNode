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