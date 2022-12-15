var a = 10;
var func = function () {
  var b = 20;
  console.log("a and b is accessible (outer):", a, b);
  var innerFunc = function () {
    var c = 30;
    console.log("a and b and c is accessible (inner):", a, b, c);
  };
  innerFunc();
  return;
};
func();
console.log("only a is accessible (global):", a);
