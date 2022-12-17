let Cartoon = function (name, character) {
  this.name = name;
  this.character = character;
  this.log = function () {
    console.log(this.name + " is a " + this.character);
  };
};

let tom = new Cartoon("tom", "cat");

let jerry = new Cartoon("jerry", "mouse");

// here the function cartoon invoked with the new keyword
// the internally created this will be bound to the object created here
