function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person('John', 'Smith');
// eslint-disable-next-line no-undef
console.log(firstName);
const mike = new Person('Mike', 'Mykhaylov');
console.log(mike.firstName);
