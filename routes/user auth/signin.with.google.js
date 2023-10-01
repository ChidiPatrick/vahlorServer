const express = require("express");

const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const cors = require("cors");

const signInWithGoogle = express.Router();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.SECRET_KEY,
};

const AUTH_OPTIONS = {
  callbackURL: "https://localhost:8000/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
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
  }),
  (req, res) => {
    console.log("Google authentication initiated");
  }
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

signInWithGoogle.get("secretPage", (req, res) => {
  console.log("Successfully logged in");
});

signInWithGoogle.get("/failure", (rq, res) => {
  console.log("Failed to authenticate user");
});

module.exports = signInWithGoogle;
