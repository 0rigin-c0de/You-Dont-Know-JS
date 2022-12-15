// scope of let, const, var in javascript

// let and const create block scoped variables

if (true) {
  const name = "shunnu";
  console.log(name);
}
// outside the block it throws the error

// variables created with var keyword is global scope variables

function func() {
  if (true) {
    var say = "hello";
  }
  console.log(say);
}
