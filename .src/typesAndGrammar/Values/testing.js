console.log(Number.isInteger(42));
console.log(Number.isInteger(42.0));
console.log(Number.isInteger(42.3));

if (!Number.isInteger) {
  Number.isInteger = function (num) {
    return typeof num == "number" && num % 1 == 0;
  };
}

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Math.pow(2, 53)));
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));

if (!Number.isSafeInteger) {
  Number.isSafeInteger = function (num) {
    return Number.isInteger(num) && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
  };
}
