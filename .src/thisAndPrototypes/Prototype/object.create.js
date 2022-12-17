const parent = {
  name: "Shunnu",
  age: 19,
  address: "India",
};

const child = Object.create(parent);
child.name = "Sunil";
child.age = 1;

console.log(child.name);
console.log(child.age + " year old");
console.log(child.address);
