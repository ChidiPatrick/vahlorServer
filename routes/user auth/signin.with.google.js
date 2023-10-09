const express = require("express");

const passport = require("passport");
const cookieSession = require("cookie-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const cors = require("cors");

const signInWithGoogle = express.Router();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.SECRET_KEY,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
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

signInWithGoogle.use(
  cookieSession({
    name: "Session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((userObject, done) => {
  done(null, userObject);
});

signInWithGoogle.use(passport.initialize());
signInWithGoogle.use(passport.session());
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
    session: true,
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
