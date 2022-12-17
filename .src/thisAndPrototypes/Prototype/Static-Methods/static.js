class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }
  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  }
  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
}

function nextToEat(animals) {
  const sortedByLeastEnergy = animals.sort((a, b) => {
    return a.energy - b.energy;
  });

  return sortedByLeastEnergy[0].name;
}

const leo = new Animal("Leo", 7);
const snoop = new Animal("Snoop", 10);

console.log(nextToEat([leo, snoop])); // Leo
