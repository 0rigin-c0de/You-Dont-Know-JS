// block scope using block statement
if (true) {
  const say = "Hello";
  console.log(say);
}
// say is block scoped to the if statement

console.log(say);

// if we try to access outside the block it throws error:- ReferenceError: say is not defined
