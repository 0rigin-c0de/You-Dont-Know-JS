var hour = parseInt(10);
var minute = parseInt(10);

console.log("The time you selected was: " + hour + ":" + minute);

var a = {
  num: 21,
  toString: function () {
    return String(this.num * 2);
  },
};

console.log(parseInt(a)); // 42

console.log("Values");
console.log(parseInt("0x10"));
console.log(parseInt(0.000008));
console.log(parseInt("103", 2));
console.log(parseInt(0.0000008));
console.log(parseInt(false, 16));
console.log(parseInt(parseInt, 16));
