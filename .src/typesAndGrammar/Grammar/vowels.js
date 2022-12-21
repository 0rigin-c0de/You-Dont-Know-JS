function vowels(str) {
  var matches;

  if (str) {
    // pull out all the vowels
    matches = str.match(/[aeiou]/g);

    if (matches) {
      return matches;
    }
  }
}

console.table(vowels("Hello World"));
