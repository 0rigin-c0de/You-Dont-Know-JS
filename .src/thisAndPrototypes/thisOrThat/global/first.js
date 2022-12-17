let sayName = function (name) {
  console.log(this.name);
};

window.name = "shunnu";
sayName();
