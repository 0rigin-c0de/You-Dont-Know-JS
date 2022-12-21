var a = "Hello World";

if (a.indexOf("lo") >= 0) {
  console.log("found it");
}

if (a.indexOf("lo") != -1) {
  console.log("found it");
}

if (a.indexOf("ol") < 0) {
  console.log("true but !found");
}

if (a.indexOf("ol") == -1) {
  console.log("true but !found");
}

if (~a.indexOf("lo")) {
  console.log("found it");
}

if (!~a.indexOf("ol")) {
  console.log("true but !found");
}

console.log(~a.indexOf("lo"));
console.log(~a.indexOf("ol"));
console.log(!~a.indexOf("ol"));
