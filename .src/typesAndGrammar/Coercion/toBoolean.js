var a = new Boolean(false);
var b = new Number(0);
var c = new String("");

var d = Boolean(a && b && c);

console.log(d);

var a = "0";
var b = [];
var c = {};

var d = "";
var e = 0;
var f = null;
var g;

console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(c));
console.log(Boolean(d));
console.log(Boolean(e));
console.log(Boolean(f));
console.log(Boolean(g));
