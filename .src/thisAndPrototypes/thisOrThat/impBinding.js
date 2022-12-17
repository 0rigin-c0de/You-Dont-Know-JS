function fn() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  fn: fn,
};

var obj1 = {
  a: 2,
  obj2: obj2,
};

obj1.obj2.fn();
