function greeting(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old!`);
  };
}

const tom = {
  name: "tom",
  age: 19,
};

const jerry = {
  name: "jerry",
  age: 21,
};

greeting(tom);
greeting(jerry);

tom.logMessage();
jerry.logMessage();
