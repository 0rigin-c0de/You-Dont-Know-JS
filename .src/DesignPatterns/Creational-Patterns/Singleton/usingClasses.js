class config {
  constructor() {}
  start() {
    console.log("App has started");
  }
  update() {
    console.log("App has updated");
  }
}

// new keyword create a new variable
// but empty we want to add value in it;

const instance = new config();
Object.freeze(instance);
console.log(instance);
