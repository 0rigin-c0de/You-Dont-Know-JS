function baz() {
  console.log("baz");

  bar(); // call-site for bar
}

function bar() {
  console.log("bar");

  foo(); // call site for foo
}

function foo() {
  // call site in bar
  console.log("foo");
}

baz();
