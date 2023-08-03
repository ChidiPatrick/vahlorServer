const { Users } = require("../../model/user.model");

const addUser = async (req, res) => {
  await Users.create(req.body);
};

module.exports = { addUser };
