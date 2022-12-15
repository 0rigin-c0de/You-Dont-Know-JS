function sayWord(word) {
  return () => console.log(word);
}

const sayHello = sayWord("Hello");

sayHello();
