var a = {
  val: [1, 2, 3],

  // probably correct!
  toJSON: function () {
    return this.val.slice(1);
  },
};

var b = {
  val: [1, 2, 3],

  // probably incorrect!
  toJSON: function () {
    return "[" + this.val.slice(1).join() + "]";
  },
};

console.log(JSON.stringify(a)); // "[2,3]"
console.log(JSON.stringify(b)); // ""[2,3]""
