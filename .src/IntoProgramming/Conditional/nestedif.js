const priceOfGood = 100;
var priceOfAnother = 150;

var moneyIHave = 1000;
var moneyISpent = moneyIHave - 600;

if (moneyISpent > priceOfGood) {
  console.log("I want to buy this good!");
  moneyISpent = moneyISpent + priceOfGood;
  moneyIHave = moneyIHave - moneyISpent;
}
if (moneyIHave > priceOfAnother) {
  console.log("I want to buy another one");
} else {
  console.log("No, thanks.");
}
