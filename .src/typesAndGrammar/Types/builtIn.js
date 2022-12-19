var a = null;

console.log(!a && typeof a);

console.log(typeof undefined);
console.log(typeof true);
console.log(typeof 42);
console.log(typeof "42");
console.log(typeof { life: 42 });
console.log(typeof Symbol());

console.log(
  typeof function a() {
    /* .. */
  }
);
