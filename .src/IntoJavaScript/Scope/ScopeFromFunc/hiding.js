function doSomething(a) {
  function dosome(a) {
    return a - 1;
  }
  var b;

  b = a + dosome(a * 2);

  console.log(b * 3);
}
doSomething(2);
