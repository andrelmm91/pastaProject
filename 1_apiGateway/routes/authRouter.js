const express = require("express");
const router = express.Router();

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

  async function provide(email) {
    const response = await fetch("http://localhost:8083/provide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });

    if (!response.ok) {
      console.log("Could not provide token!", email);
    }

    const token = await response.json();
    return token;
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

  async function validate(token) {
    const response = await fetch("http://localhost:8083/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    });

    if (!response.ok) {
      console.log("Could not validate the token!", token);
    }

    const authCheck = await response.json();
    return authCheck;
  }
});

module.exports = router;
