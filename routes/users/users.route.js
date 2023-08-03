const express = require("express");

const bodyparser = require("body-parser");

const { addUser } = require("../users/users.controller");

const UsersRouter = express.Router();

UsersRouter.post("/", bodyparser.json(), addUser);

module.exports = UsersRouter;
