function func() {
  var a = 2;
  this.bar();
}

function bar() {
  console.log(this.a);
}

func();
