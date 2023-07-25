const express = require("express");
const router = express.Router();

///////////////////////////////////////
// provide a token based on user email
router.post("/provide", async (req, res) => {
  const email = req.body.email;
  if (!isValidEmail(email)) {
    return res.status(422).json({
      message: "Cannot provide a token. Email is invalid.",
    });
  }

  const token = createJSONToken(email);

  res.status(200).json({ message: "Token created.", token: token });
});

//////////////////////
// validate the token
router.post("/validate", async (req, res) => {
  const token = req.body.token;

  const validation = await validateJSONToken(token);

  res.json({ validation: validation, token: token });
});

module.exports = router;
