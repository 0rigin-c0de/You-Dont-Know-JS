let getName = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

let user = {
  name: "shunnu",
  address: "India",
};

let hobbies = ["Music", "Food"];

getName.apply(user, hobbies);
