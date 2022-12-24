class God {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.specious = "God";
  }
}

fly = () =>
  console.log("spin the hammer fast and hurl into the air", "zzziiiiggg");
sayPhrase = () => console.log(this.phrase);

const god = new God("Thor", "This drink, I like it! ANOTHER! ");

console.log(god.name);
console.log(god.phrase);
