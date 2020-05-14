var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function(){
        console.log('hello, ' + this.firstname + ' ' + this.lastname);
    }
}

person.greet();

person.firstname = 'Susan';
person.lastname = 'Smith';
person.greet();

console.log(person['firstname']);