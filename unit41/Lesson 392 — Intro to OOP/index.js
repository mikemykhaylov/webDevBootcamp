function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function bark() {
    console.log(`${this.name} just barked`);
  };
}

const rusty = new Dog('Rusty', 3);
rusty.bark();
