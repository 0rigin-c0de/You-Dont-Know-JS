var a = 23;
var b = "hello";
var c = null;

if (!!a && (!!b || !!c)) {
  console.log("yep");
}

if (a && (b || c)) {
  console.log("it's run");
}

console.log(a || b, a && b, c || b, c && b);

console.log(a || b, a ? a : b, a && b, a ? b : a);

function foo(a, b) {
  a = a || "hello";
  b = b || "world";

  console.log(a + " " + b);
}

foo();
foo("yeah", "yeah!");
foo("That's it!", "");
