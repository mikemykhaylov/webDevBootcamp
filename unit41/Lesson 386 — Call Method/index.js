const person = {
  firstName: 'Mike',
  sayHi() {
    return `Hi, ${this.firstName}`;
  },
  determineContext() {
    return this === person;
  },
  dog: {
    sayHello() {
      return `Hello, ${this.firstName}`;
    },
    determineContext() {
      return this === person;
    },
  },
};
person.dog.sayHello();
console.log('person.dog.sayHello(): ', person.dog.sayHello());
person.dog.sayHello.call(person);
console.log('person.dog.sayHello.call(person): ', person.dog.sayHello.call(person));
person.dog.determineContext();
console.log('person.dog.determineContext(): ', person.dog.determineContext());
person.dog.determineContext.call(person);
console.log('person.dog.determineContext.call(person): ', person.dog.determineContext.call(person));
