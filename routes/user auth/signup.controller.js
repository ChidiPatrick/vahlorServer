const { Users } = require("../../model/userbio.model");

const registerNewUser = (req, res) => {
  Users.register(
    new Users({
      username: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      address: req.body.address,
      email: req.body.email,
      tel: req.body.tel,
    }),

    req.body.password,

    (err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    }
  );
};

module.exports = { registerNewUser };
