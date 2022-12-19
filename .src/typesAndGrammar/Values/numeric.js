var a = 42.3;
var b = 42.0;

console.log(a, b);

// var a = 5e10;
// console.log(a);

console.log(a.toExponential());

var b = a * a;
console.log(b);

var c = a / 1;
console.log(c);

// toFixed

console.log(a.toFixed(0));
console.log(a.toFixed(1));
console.log(a.toFixed(2));
console.log(a.toFixed(3));
console.log(a.toFixed(4));

// toPrecision
console.log(a.toPrecision(1));
console.log(a.toPrecision(2));
console.log(a.toPrecision(3));
console.log(a.toPrecision(4));
console.log(a.toPrecision(5));
