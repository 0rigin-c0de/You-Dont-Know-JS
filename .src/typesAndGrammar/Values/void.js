function doSomething() {
  if (!APP.ready) {
    // try again later
    return void setTimeout(doSomething, 100);
  }

  var result;

  // do some other stuff
  return result;
}

// were we able to do it right away?
if (doSomething()) {
  // handle next tasks right away
}
