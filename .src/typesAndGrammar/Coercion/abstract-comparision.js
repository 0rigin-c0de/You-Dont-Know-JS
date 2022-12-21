var a = { b: 42 };
var b = { b: 43 };
console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a <= b);
console.log(a >= b);

console.log("\n");

var c = [42];
var d = "043";

console.log(c < d); // false -- string comparison!
console.log(Number(c) < Number(d)); // true -- number comparison!
