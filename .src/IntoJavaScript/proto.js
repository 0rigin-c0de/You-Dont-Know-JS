var intro = {
  hey: "And I'm a frontend developer",
};

// create `bar` and link it to `foo`
var obj = Object.create(intro);

obj.b = "I'm shunnu";

console.log(obj.b); // "hello world"
console.log(obj.hey);
