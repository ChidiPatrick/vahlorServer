const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const signinModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

signinModel.plugin(passportLocalMongoose);

const UserModel = mongoose.model("siginModel", signinModel);

module.exports = UserModel;
