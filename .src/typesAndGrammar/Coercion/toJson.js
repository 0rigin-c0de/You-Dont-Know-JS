var o = {};

var a = {
  b: 42,
  c: o,
  d: function () {},
};

o.e = a;

a.toJSON = function () {
  return { b: this.b };
};

console.log(JSON.stringify(a));

var z = {
  b: 42,
  c: "42",
  d: [1, 2, 3],
};

JSON.stringify(z, ["b", "c"]); // "{"b":42,"c":"42"}"

JSON.stringify(z, function (k, v) {
  if (k !== "c") return v;
});
// "{"b":42,"d":[1,2,3]}"
console.log(JSON.stringify(z));
