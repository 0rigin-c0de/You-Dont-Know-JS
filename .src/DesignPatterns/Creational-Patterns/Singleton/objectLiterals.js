const config = {
  start: () => {
    console.log("App has started");
  },
  update: () => {
    console.log("App has updated");
  },
};

/* We freeze the object to prevent new properties being added
and existing properties being modified or removed */

Object.freeze(config);

config.start();
config.update();

config.name = "Doremon";
console.log(config); // it does't work

