function Person(name) {
  this.firstName = name;
}

const mike = new Person('Mike');
const julia = new Person('Julia');
console.log('mike.isCool: ', mike.isCool);
Person.prototype.isCool = true;
console.log('mike.isCool: ', mike.isCool);
console.log('julia.isCool: ', julia.isCool);
