const express = require("express");

const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const cors = require("cors");

const signInWithGoogle = express.Router();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  callbackURL: "http://localhost:8000/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.SECRET_KEY,
};

const verifyCallback = (accessToke, refreshToken, profile, done) => {
  console.log(profile);
  done(null, profile);
};

passport.use(new GoogleStrategy(AUTH_OPTIONS, verifyCallback));

signInWithGoogle.use(passport.initialize());

signInWithGoogle.use(
  "/",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

signInWithGoogle.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/secretPage",
    session: false,
  }),
  (req, res) => {
    console.log("Google called us back");
  }
);

signInWithGoogle.get("/failure", (rq, res) => {
  console.log("Failed to authenticate user");
});

module.exports = signInWithGoogle;
