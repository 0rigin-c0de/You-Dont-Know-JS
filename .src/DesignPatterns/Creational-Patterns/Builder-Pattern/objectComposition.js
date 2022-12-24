const bug = {
  name: "buggy",
  phrase: "your debugger doesn't work with me ",
};

const bug2 = {
  name: "bug2",
  phrase: "Can't touch this! Na na na na.....",
};

// these function take an object as a parameter and add a method to them

const addFlyingAbility = (obj) => {
  obj.fly = () => console.log(`Now ${obj.name} can fly`);
};

const addSpeechAbility = (obj) => {
  obj.saySmthg = () =>
    console.log(`${obj.name} walks the walk and talks the talk!`);
};

addFlyingAbility(bug);
bug.fly();

addSpeechAbility(bug2);
bug2.saySmthg();
