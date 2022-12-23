function now() {
  return 21;
}

function later() {
  answer = answer * 2;
  console.log("Meaning of life:", answer);
}

var answer = now();

setTimeout(later, 1000); // Meaning of life: 42
