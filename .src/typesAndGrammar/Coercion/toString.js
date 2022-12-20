var a = 7 * 4 * 2 * 4 * 5 * 6 * 7 * 7 * 8;
console.log(a.toString());

var a = [1, 2, 3];

console.log(a.toString());

console.log(JSON.stringify(42)); // "42"
console.log(JSON.stringify("42")); // ""42"" (a string with a quoted string value in it)
console.log(JSON.stringify(null)); // "null"
console.log(JSON.stringify(true)); // "true"
