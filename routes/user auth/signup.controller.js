const { Users } = require("../../model/userbio.model");

const registerNewUser = (req, res) => {
  Users.create(req.body);
};

module.exports = { registerNewUser };
