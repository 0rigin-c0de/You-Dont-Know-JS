var a = "42";

var b = "0";

var c = 42;
var d = 0;

// it is just concatenation
console.log(a + b);
console.log(c + d);

var num = [1, 2];
var num1 = [3, 4];

console.log(num + num1);

/*Neither of these operands is a string, but clearly they were both
 coerced to strings and then the string concatenation kicked in */
