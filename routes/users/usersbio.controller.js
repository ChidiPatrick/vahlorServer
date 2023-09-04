const { Users } = require("../../model/userbio.model");

const addUser = async (req, res) => {
  await Users.create(req.body);
  return res.status(200);
};

module.exports = { addUser };
