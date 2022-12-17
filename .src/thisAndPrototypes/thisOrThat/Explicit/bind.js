let getName = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

let user = {
  name: "Shunnu",
  address: "India",
};

let hobbies = ["Swimming", "Coding"];

let newFn = getName.bind(user, hobbies[0], hobbies[1]);

newFn();
