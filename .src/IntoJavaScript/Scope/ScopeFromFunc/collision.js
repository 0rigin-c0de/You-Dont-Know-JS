function let() {
  function come(a) {
    b = 3;
    console.log(a + b);
  }
  for (var b = 0; b < 10; b++) {
    return come(b * 2);
  }
}

let();
