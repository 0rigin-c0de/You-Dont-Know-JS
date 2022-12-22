bar: for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    if (i * j >= 3) {
      console.log("stopping!", i, j);
      break bar;
    }
    console.log(i, j);
  }
}
