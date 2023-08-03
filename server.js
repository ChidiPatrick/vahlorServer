const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");

const UsersRouter = require("./routes/users/users.route");

const PORT = process.env.PORT || 8000;

const MONGODB_URL =
  "mongodb+srv://okaforpatrick302:Ghy9jZXXxRfMoZuY@cluster0.ttiszbq.mongodb.net/?retryWrites=true&w=majority";

const app = express();

mongoose.connection.once("open", () => {
  console.log("Connection open...");
});

mongoose.connection.on("error", () => {
  console.log("Please check your internet connection");
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/addUser", UsersRouter);

/// Ignite server ////
app.listen(PORT, () => {
  mongoose.connect(MONGODB_URL);
  console.log(`Listening to port: ${PORT}`);
});

//Ghy9jZXXxRfMoZuY