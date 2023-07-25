const bodyParser = require("body-parser");
const express = require("express");

const authToken = require("./00_routes/authToken");

const app = express();

app.use(bodyParser.json()); // body parser receving data

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// // SERVICES
// /provide > Input: Email | output: {Token}
// /validate > Input: Token | output: {Validation: Boolen, Token}
app.use(authToken);

// app.use((req, res, next) => {
//   const allowedOrigin = "http://localhost:8080/";
//   const requestOrigin = req.headers.origin;

//   // Check if the request comes from the allowed origin
//   if (requestOrigin === allowedOrigin) {
//     app.use(authToken);
//   } else {
//     res.status(500).json({ message: requestOrigin });
//   }
// });

// // handlers
// Error handler
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

app.listen(8083);
