Number.prototype.valueOf = function () {
  return 3;
};

if (new Number(2) == 3) {
  console.log("hello World");
}
var a = 2;
if (a == 2 && a == 3) {
  console.log(true);
} else {
  console.log(false);
}
