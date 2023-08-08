const { Users } = require("../../model/userbio.model");

const addUser = async (req, res) => {
  await Users.create(req.body);
};

module.exports = { addUser };
