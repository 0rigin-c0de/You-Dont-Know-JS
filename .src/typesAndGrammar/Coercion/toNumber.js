var a = {
  valueOf: function () {
    return 42;
  },
};

var b = {
  toString: function () {
    return "42";
  },
};

var c = [4, 2];
c.toString = function () {
  return this.join("");
};

console.log(Number(a));
console.log(Number(b));
console.log(Number(c));
console.log(Number(""));
console.log(Number([]));
console.log(Number(["abc"]));
