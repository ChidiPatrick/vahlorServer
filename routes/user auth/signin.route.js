const express = require("express");

const passport = require("passport");
const EmailPasswordStrategy = require("passport-local");
const bodyParser = require("body-parser");
const session = require("express-session");
const connectEnsureLogin = require("connect-ensure-login");
const LocalStrategy = require("passport-local");

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

passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

SigninRoute.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "http://localhost:3000/secretPage",
    failureRedirect: "http://localhost:3000/failurePage",
    // failureFlash: true,
  })
  // signinUser
);

module.exports = SigninRoute;
