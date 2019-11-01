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

let elieAddNumbers = mike.addNumbers.bind(elie);
elieAddNumbers(1, 2, 3, 4);
console.log('elieAddNumbers(1,2,3,4): ', elieAddNumbers(1, 2, 3, 4));
elieAddNumbers = mike.addNumbers.bind(elie, 1, 2);
elieAddNumbers(3, 4);
console.log('elieAddNumbers(3,4): ', elieAddNumbers(3, 4));
