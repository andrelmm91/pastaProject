const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./00_routes/userRouter");
const { mongodbConnection } = require("./01_MongoDB/mongodbConnection");

const app = express();

app.use(bodyParser.json()); // body parser receving data
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// // SERVICES
app.use(userRouter);

// // handlers
// Error handler
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

mongoose
  .connect(mongodbConnection)
  .then(() => {
    console.log("UserDB Connection Successful!");
    app.listen(8081);
  })
  .catch((err) => console.log(err));
