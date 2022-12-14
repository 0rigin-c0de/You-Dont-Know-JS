var b = 44;

(function func() {
  var b = 10;
  console.log(b);
})();
console.log(b);

var a = (function funct() {
  return 42;
})();

console.log(a);
