const express = require("express");

const router = express.Router();
const User = require("../01_dataModel/userDataModel");

///////////////////////////////////////
// provide a token based on user email
router.post("/create", async (req, res) => {
  res.status(200).json({ message: "Token created.", token: token });
});

//////////////////////
// validate the token
router.post("/edit", async (req, res) => {});

module.exports = router;
