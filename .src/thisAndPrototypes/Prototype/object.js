let animal = {};
animal.name = "leo";
animal.energy = 10;

animal.eat = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};

animal.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += lengths;
};

animal.play = function () {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};
