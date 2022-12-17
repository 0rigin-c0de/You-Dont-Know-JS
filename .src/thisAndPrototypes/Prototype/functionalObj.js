const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  },
  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  },
};
function Animal(name, energy) {
  let animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = energy;

  return animal;
}

const lion = Animal("lion", 20);
const deer = Animal("deer", 10);

lion.sleep(10);
deer.play(5);
