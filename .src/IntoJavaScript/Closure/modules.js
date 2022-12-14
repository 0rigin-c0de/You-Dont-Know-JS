function User() {
  var username, password;

  function doLogin(user, pw) {
    username = user;
    password = pw;

    // do the rest of the login work
  }

  var publicAPI = {
    login: doLogin,
  };

  return publicAPI;
}

// create a `User` module instance
var shunnu = User();

shunnu.login("shunnu", "shu125#@$#5");
