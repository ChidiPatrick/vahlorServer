const mongoose = require("mongoose");

const userBioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
});

const Users = mongoose.model("User", userBioSchema);

module.exports = { Users };
