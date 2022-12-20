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
