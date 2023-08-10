const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//routers
const authRouter = require("./01_authRouters/0_authRouter");
const userRouter = require("./02_userRouters/0_userRouter");
const protRoute = require("./00_ProtectedRoute/0_protRouter");

// initial set parameters
app.use(bodyParser.json()); // body parser receving data
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// // routing
app.use("/auth/validate", authRouter);
app.use("/user/create", userRouter);
app.use(protRoute);
app.use("/user", userRouter);

// // handlers
// Error handler
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

app.listen(8080);
