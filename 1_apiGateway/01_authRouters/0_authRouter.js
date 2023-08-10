const express = require("express");
const router = express.Router();

const { authHandler } = require("./authHandler");

///////////////////////////////////////
// router for provide a token based on user email
router.post("/provide", async (req, res) => {
  const data = req.body;
  const crudOperations = "POST";
  const crudDestination = "provide";

  if (!isValidEmail(data.email)) {
    return res.status(422).json({
      message: "Cannot provide a token. Email is invalid.",
    });
  }

  try {
    const response = await authHandler(crudOperations, crudDestination, data);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Token NOT created.", error: error });
  }
});

//////////////////////
// router for validate the token
router.post("/validate", async (req, res) => {
  const data = req.body;
  const crudOperations = "POST";
  const crudDestination = "validate";

  try {
    const response = await authHandler(crudOperations, crudDestination, data);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Token NOT validated.", error: error });
  }
});

/////////////////////////
// validating email
function isValidEmail(value) {
  return value && value.includes("@");
}

module.exports = router;
