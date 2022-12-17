function bass() {
  console.log(this.name);
}
var obj = {
  name: "shunnu",
  bass: bass,
};

var name = "sunil";

setTimeout(obj.bass, 100);
