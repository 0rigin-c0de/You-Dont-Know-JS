const tax = 0.08;

function calculateFinalPurchaseAmount(amt) {
  // calculate the new amount with the tax
  amt = amt + amt * tax;

  // return the new amount
  return amt;
}

var amount = 33;

amount = calculateFinalPurchaseAmount(amount);

console.log(amount.toFixed(2));
