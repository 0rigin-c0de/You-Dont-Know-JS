const spending = 500;
const taxRate = 0.08;
const carPrice = 200;
const goodsPrice = 100;

var bank_balance = 1000;
var amount = 0;

function calculateTax(amount) {
  return amount * taxRate;
}
function formatAmount(amount) {
  return "Rs" + amount.toFixed(2);
}

while (amount < bank_balance) {
  // buy a new car
  amount = amount + carPrice;

  // can we buy goods
  if (amount < spending) {
    amount = amount + goodsPrice;
  }
}

amount = amount + calculateTax(amount);

console.log("Your purchase " + formatAmount(amount));

if (amount > bank_balance) {
  console.log("You cannot afford this purchase ☹️");
}
