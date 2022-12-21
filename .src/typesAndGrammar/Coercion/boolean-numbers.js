function onlyOne() {
  return !!((a && !b && !c) || (!a && b && !c) || (!a && !b && c));
}

var a = true;

var b = false;

var c = false;

console.log(onlyOne(a, b, b));
console.log(onlyOne(b, a, b));
console.log(onlyOne(a, b, a));

function numOne() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    // skip falsy values. same as treating
    // them as 0's, but avoids NaN's.
    if (arguments[i]) {
      sum += arguments[i];
    }
  }
  return sum == 1;
}

console.log(onlyOne(b, a));
console.log(onlyOne(b, b));
console.log(onlyOne(b, a, b, b, b));
console.log(onlyOne(b, a, b, b, b, a));
