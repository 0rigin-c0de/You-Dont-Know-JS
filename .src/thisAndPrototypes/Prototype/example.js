const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  },
  play(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  },
};

function Animal() {
  let animal = {};
  animal.name = "lion";
  animal.energy = 20;
  animal.eat = animalMethods.eat;
  animal.sleep = animalMethods.sleep;
  animal.play = animalMethods.play;
  console.log(animal);
  return Animal;
}

Animal();
