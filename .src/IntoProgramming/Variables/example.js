var taxRate = 0.8;
amount = 98.99;

amount = amount * 2;
amount = amount + amount * taxRate;
console.log(amount); // 356.36400000000003
console.log(amount.toFixed(2)); // 356.36
