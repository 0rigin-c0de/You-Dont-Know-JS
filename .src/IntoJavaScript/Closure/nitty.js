// definition of closure
function func() {
  var a = 6;
  function let() {
    console.log(a);
  }

  return let;
}

var num = func();

num(); // --- closure was just observed, man.

// let still has a reference to that scope, and that reference is called closure.
