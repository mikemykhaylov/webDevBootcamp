const mike = {
  firstName: 'Mike',
  sayHi() {
    return `Hi, ${this.firstName}`;
  },
  addNumbers(a, b, c, d) {
    return `${this.firstName} just calculated ${a + b + c + d}`;
  },
};

const elie = {
  firstName: 'Elie',
};

mike.addNumbers(1, 2, 3, 4);
console.log('mike.addNumbers(1,2,3,4): ', mike.addNumbers(1, 2, 3, 4));
mike.addNumbers.apply(elie, [1, 2, 3, 4]);
console.log('mike.addNumbers.apply(elie, [1,2,3,4]): ', mike.addNumbers.apply(elie, [1, 2, 3, 4]));
