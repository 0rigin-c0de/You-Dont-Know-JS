var a = 42;
var b = "abc";
var c;
var d = null;

if (a) {
  console.log("yep");
}

if (c) {
  console.log("nope , never runs");
}

c = d ? a : b;
console.log(c);

if ((a && d) || c) {
  console.log("yeah");
}
