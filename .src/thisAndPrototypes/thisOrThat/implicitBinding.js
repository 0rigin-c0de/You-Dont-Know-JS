function fn() {
  console.log(this.a);
}

var object = {
  a: 2,
  fn: fn,
};

object.fn();
