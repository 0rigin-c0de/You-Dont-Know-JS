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
