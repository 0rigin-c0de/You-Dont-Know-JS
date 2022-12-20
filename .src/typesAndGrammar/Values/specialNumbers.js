if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return typeof n === "number" && window.isNaN(n);
  };
}

var a = 2 / "foo";
var b = "foo";

console.log(Number.isNaN(a)); // true
console.log(Number.isNaN(b)); // false
