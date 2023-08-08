const express = require("express");

const bodyparser = require("body-parser");

const { addUser } = require("./usersbio.controller");

const UserRouter = express.Router();

UserRouter.post("/", bodyparser.json(), addUser);

module.exports = UserRouter;
