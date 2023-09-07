const passport = require("passport");
const passportMongoose = require("passport-local-mongoose");

const { Users } = require("../../model/userbio.model");

const signinUser = (req, res) => {
  try {
    console.log(req.body);
    console.log("User signed in...");

    // res.status(200).redirect("http://localhost:3000/secretPage");
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
