const express = require("express");
const router = express.Router();

// functionalities
const { createToken, validateToken } = require("./tokenHandler");

///////////////////////////////////////
// router for provide a token based on user email
router.post("/provide", async (req, res) => {
  const email = req.body.email;
  if (!isValidEmail(email)) {
    return res.status(422).json({
      message: "Cannot provide a token. Email is invalid.",
    });
  }

  const token = createToken(email);

  res.status(200).json({ message: "Token created.", token: token });
});

//////////////////////
// router for validate the token
router.post("/validate", async (req, res) => {
  const token = req.body.token;

  const validation = await validateToken(token);

  res.json(validation);
});

/////////////////////////
// validating email
function isValidEmail(value) {
  return value && value.includes("@");
}

module.exports = router;
