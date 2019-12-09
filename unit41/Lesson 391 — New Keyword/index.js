function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person('John', 'Smith');
console.log(this.firstName);
const mike = new Person('Mike', 'Mykhaylov');
console.log(mike.firstName);
