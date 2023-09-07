const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { validatePassword } = require("../routes/user auth/signin.controller");

const userBioSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
});

userBioSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

const Users = mongoose.model("User", userBioSchema);

// function validatePassword(password, email) {
//   const user = Users.findOne({ email, password });
//   console.log(user);
// }

module.exports = { Users };
