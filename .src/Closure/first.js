function makeAdder(x) {
  function add(y) {
    return y + x;
  }
  return add;
}

var plusOne = makeAdder(1);

var plusTen = makeAdder(10);

console.log(plusOne(3) + "  <-- (1 + 3)");
console.log(plusOne(41) + "  <-- (1 + 41)");
console.log(plusTen(13) + "  <-- (10 + 13)");
