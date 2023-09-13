const express = require("express");

const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const Passport = require("passport");
const connectEnsureLogin = require("connect-ensure-login");

const UserRouter = require("./routes/users/usersbio.route");
const attendanceRoute = require("./routes/attendance record/attendance.route");
const SigninRoute = require("./routes/user auth/signin.route");
const SignupRoute = require("./routes/user auth/signup.route");
const signInWithGoogle = require("./routes/user auth/signin.with.google");

const PORT = process.env.PORT || 8000;

const MONGODB_URL = `${process.env.MONGODB_URL}`;

const app = express();

mongoose.connection.once("open", () => {
  console.log("Connection open...");
});

mongoose.connection.on("error", () => {
  console.log("Please check your internet connection");
});

// const students = mongoose.connection.collection("studentCredentials");
// console.log(students);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(Passport.initialize());
/////// Request handlers ////
app.use("/addUser", UserRouter);
app.use("/addAttendanceRecord", attendanceRoute);
app.use("/signInUser", SigninRoute);
app.use("/signupUser", SignupRoute);
app.use("/auth/google", (req, res) => {
  console.log(req);
});

/// Ignite server ////
app.listen(PORT, () => {
  mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Listening to port: ${PORT}`);
});

//Ghy9jZXXxRfMoZuY
