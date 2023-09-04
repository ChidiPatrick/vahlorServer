const bodyParser = require("body-parser");
const express = require("express");
const { registerNewUser } = require("./signup.controller");

const SignupRoute = express.Router();

// SignupRoute.use(bodyParser);

SignupRoute.post("/", express.json(), registerNewUser);

module.exports = SignupRoute;
