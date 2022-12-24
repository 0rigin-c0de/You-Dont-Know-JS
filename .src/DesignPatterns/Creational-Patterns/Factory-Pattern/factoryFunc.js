function Witch(name, phrase) {
  this.name = name;
  this.phrase = phrase;
  this.specious = "witch";
}
Witch.prototype.fly = () => console.log("Witch flying with her powers");
Witch.prototype.sayPhrase = () => console.log(this.phrase);

const witch = new Witch(
  "Scarlet",
  "You Break The Rules And Become A Hero. I Do It And I Become The Enemy. That Doesn't Seem Fair"
);
console.log(witch.name);
console.log(witch.phrase);
witch.fly();
