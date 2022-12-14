function func() {
  console.log(this.bar);
}

var bar = "global";

var one = {
  bar: "one",
  func: func,
};

var two = {
  bar: "two",
};

func();
one.func();
func.call(two);
new func();
