const mike = {
  firstName: 'Mike',
  sayHi() {
    setTimeout(
      // Bind is needed only with anonymous function, not needed with arrow one
      () => {
        console.log(`Hi, ${this.firstName}`);
      },
      1000,
    );
  },
};

mike.sayHi();
