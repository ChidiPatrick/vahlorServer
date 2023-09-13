const passport = require("passport");

const signinUser = (req, res) => {
  try {
    res.redirect("/secretPage");
  } catch (err) {
    console.log(err);
  }
};

const validatePassword = (email, password) => {
  // const user = Users.findOne(
  //   { email: email, password: password },
  //   { email, password }
  // );
  // if (email === user.email && password === user.password) {
  //   console.log("User authenticated successfully");
  //   console.log(user);
  //   //   return user;
  // } else {
  //   console.log("user not recognised");
  // }
};

module.exports = { signinUser, validatePassword };
