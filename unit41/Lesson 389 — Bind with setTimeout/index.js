const mike = {
  firstName: 'Mike',
  sayHi() {
    setTimeout(() => {
      console.log(`Hi, ${this.firstName}`);
    }, 1000);
  },
};

mike.sayHi();
