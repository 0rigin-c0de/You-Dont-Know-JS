function fn() {
  console.log(this.a);
}

function dosome(fn) {
  fn(); // call site for fn
}

var obj = {
  a: 2,
  fn: fn,
};

var a = "opps, global";

dosome(obj.fn);
