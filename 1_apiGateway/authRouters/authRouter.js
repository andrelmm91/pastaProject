const express = require("express");
const router = express.Router();

const { provide } = require("./provide");
const { validate } = require("./validate");

///////////////////////////////////////
// provide a token based on user email
router.post("/provide", async (req, res) => {
  const email = req.body.email;

  try {
    const token = await provide(email);
    res.status(201).json(token);
  } catch {
    console.log("error in providing a token for ", email);
  }
});

//////////////////////
// validate the token
router.post("/validate", async (req, res) => {
  const token = req.body.token;

  try {
    const authCheck = await validate(token);
    res.json(authCheck);
  } catch {
    console.log("error in validating the token ", token);
  }
});

module.exports = router;
