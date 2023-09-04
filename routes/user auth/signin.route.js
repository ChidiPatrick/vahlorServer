const express = require("express");

const passport = require("passport");
const EmailPasswordStrategy = require("passport-local");
const bodyParser = require("body-parser");
const session = require("express-session");
const Passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login");

const signinModel = require("../../model/signin.model");
const { Users } = require("../../model/userbio.model");
const { signinUser } = require("./signin.controller");

const { local, authenticateUser } = require("./signin.controller");

const SigninRoute = express.Router();

passport.initialize();

SigninRoute.use(
  session({
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

SigninRoute.use(express.json());
SigninRoute.use(passport.initialize());
SigninRoute.use(passport.session());

SigninRoute.post("/", signinUser);

module.exports = SigninRoute;
