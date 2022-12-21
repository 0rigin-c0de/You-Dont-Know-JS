console.log("0" == null);
console.log("0" == false);
console.log("0" == undefined);
console.log("0" == NaN);
console.log("0" == 0);
console.log("0" == "");
console.log(false == null);
console.log(false == undefined);
console.log(false == NaN);
console.log(false == 0);
console.log(false == "");
console.log(false == []);
console.log(false == {});
console.log("" == null);
console.log("" == undefined);
console.log("" == NaN);
console.log("" == 0);
console.log("" == []);
console.log("" == {});
console.log(0 == null);
console.log(0 == undefined);
console.log(0 == NaN);
console.log(0 == []);
console.log(0 == {});
console.log("\n");
// the crazy ones
console.log([] == ![]); // true

// Another famously cited gotcha:
console.log(0 == "\n");
