function func() {
  return 42;
}
func.bar = "hello world";

console.log(typeof func);
console.log(typeof func());
console.log(typeof func.bar);
