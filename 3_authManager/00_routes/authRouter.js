const express = require("express");
const router = express.Router();

// functionalities
const { createToken, validateToken } = require("../01_handler/tokenHandler");

///////////////////////////////////////
// provide a token based on user email
router.post("/provide", async (req, res, next) => {
  const email = req.body.email;
  const token = createToken(email);
  res.status(200).json({ message: "Token created.", token: token });
  next();
});

router.post("/validate", async (req, res, next) => {
  const token = req.body.token;
  try {
    const validation = await validateToken(token);
    res.status(200).json({ validation: true, ...validation });
    next();
  } catch (err) {
    res.status(500).json({ validation: false });
  }
});

module.exports = router;
