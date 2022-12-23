function foo(x) {
  return listener;
}

var event = foo(42);

event.on("completion", function () {});
event.on("failure", function () {});
