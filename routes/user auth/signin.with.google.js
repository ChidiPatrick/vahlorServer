const express = require("express");

const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const signInWithGoogle = express.Router();

passport.initialize();

signInWithGoogle.use(
  session({
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

signInWithGoogle.use(express.json());
signInWithGoogle.use(passport.initialize());
signInWithGoogle.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.SECRET_KEY,
      callbackURL: "http://localhost:8000/auth/google/callback",
    },
    function (accessToken, refreshtoken, profile, done) {
      Users.findOrCreate(
        {
          googleId: profile.id,
        },
        (err, user) => {
          if (err) {
            console.log("ERROOOOOOOOOOOOOOR!!!!!!!!!");
            console.log(err);
          } else {
            console.log("SUCCEEEEEEEEEEEEEESS!");
            console.log(user);
            return done(err, user);
          }
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

signInWithGoogle.get(
  "/",
  passport.authenticate("google", { scope: ["profle", "email"] })
);
signInWithGoogle.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/login" }, (req, res) => {
    req.redirect("secretPage");
  })
);

module.exports = signInWithGoogle;
