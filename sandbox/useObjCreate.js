var person = {
    firstName: '',
    lastName:'',
    greeting:'Hello',
    greet: function(){
        console.log(this.greeting + ' ' + this.firstName + ' ' + this.lastName);
    }
}

var john = Object.create(person);
john.greet();
john.firstName = 'John';
john.lastName = 'Doe';
john.greet();