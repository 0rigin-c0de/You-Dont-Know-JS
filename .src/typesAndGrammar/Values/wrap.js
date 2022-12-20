function wrap(wrapper) {
  wrapper.a = 42;
}

var obj = {
  a: 2,
};

wrap(obj);
console.log(obj.a);
// prints 42
