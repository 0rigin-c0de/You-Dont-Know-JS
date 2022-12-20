function foo(x) {
  x.push(4);
  console.log(x);
  x.length = 0;
  x.push(4, 5, 6, 7);
  console.log(x);
}
var a = [1, 2, 3];
foo(a);
console.log(a);
