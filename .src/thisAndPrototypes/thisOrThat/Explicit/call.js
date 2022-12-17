// how call method works

let getName = function () {
  console.log(this.name);
};

let user = {
  name: "0rigin-c0de",
  address: "github",
};

getName.call(user);
