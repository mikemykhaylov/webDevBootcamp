function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.wheels = 4;
}

function Motorcycle(...args) {
  Car.call(this, ...args);
  this.wheels = 2;
}

const ninja = new Motorcycle('Kawasaki', 'Ninja', 2018);
console.log(ninja.wheels);
