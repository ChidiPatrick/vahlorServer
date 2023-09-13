const bodyParser = require("body-parser");
const express = require("express");
const { registerNewUser } = require("./signup.controller");
const passport = require("passport");
const session = require("express-session");

const SignupRoute = express.Router();

SignupRoute.use(
  session({
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

SignupRoute.use(passport.initialize());
SignupRoute.use(passport.session());

// SignupRoute.use(bodyParser);

SignupRoute.post("/", express.json(), registerNewUser);

module.exports = SignupRoute;
