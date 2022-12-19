var a = "hello";
var b = ["h", "e", "l", "l", "o"];
console.log(a.length, b.length);
console.log(a.indexOf("e"), b.indexOf("o"));

var c = a.concat("world");
var d = b.concat("w", "o", "r", "l", "d");

console.log(a === c);
console.log(b === d);

console.log(a);
console.log(b);
