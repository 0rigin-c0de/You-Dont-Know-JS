// declare first object
const enemy = {
  attack: () => console.log("dishoooommmm"),
  flyaway: () => console.log("fly like a eagle"),
};

// declare second object

const bug1 = {
  name: "buggy McFly",
  phrase: "your debugger doesn't work here ",
};

Object.setPrototypeOf(bug1, enemy);

console.log(bug1.phrase);
console.log(bug1.flyaway());
console.log(bug1.attack());
