const express = require("express");
const router = express.Router();

// functionalities
const { validate } = require("../01_authRouters/validate");

async function verifyAuth(token) {
  const response = await validate(token);

  try {
    if (!response) {
      console.log("not authorized or token expired.");
      res.status(403).json("unathorized access");
    } else {
      return;
    }
  } catch {
    console.log("error in validating the token ", token);
  }
}

exports.verifyAuth = verifyAuth;
