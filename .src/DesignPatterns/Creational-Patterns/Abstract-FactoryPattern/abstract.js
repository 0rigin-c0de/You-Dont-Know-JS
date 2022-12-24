class car {
  constructor() {
    this.name = "car";
    this.wheels = 4;
  }
  turnOn = () => console.log("vvvrrooommm!");
}

class truck {
  constructor() {
    this.name = "truck";
    this.wheels = 8;
  }
  turnOn = () => console.log("ruuuuuummmmmmmm");
}

class motorcycle {
  constructor() {
    this.name = "motorcycle";
    this.wheels = 2;
  }
  turnOn = () => console.log("ssssssssssssssssssssssssssssssssshhhhhumm");
}

const VehicleFactory = {
  createVehicle: function (type) {
    switch (type) {
      case "car":
        return new car();

      case "truck":
        return new truck();

      case "motorcycle":
        return new motorcycle();
      default:
        return null;
    }
  },
};
