function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}
Vehicle.prototype.turnOn = function () {
  this.isRunning = true;
};
Vehicle.prototype.turnOff = function () {
  this.isRunning = false;
};
Vehicle.prototype.Beep = function () {
  if (this.isRunning) {
    return 'Beep!';
  }
  return 'No Beep';
};
const kiaRio = new Vehicle('Kia', 'Rio', 2017);
console.log('kiaRio.Beep(); ', kiaRio.Beep());
kiaRio.turnOn();
console.log('kiaRio.Beep(); ', kiaRio.Beep());
kiaRio.turnOff();
console.log('kiaRio.Beep(); ', kiaRio.Beep());
