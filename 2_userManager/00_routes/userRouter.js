const express = require("express");
const router = express.Router();

const { add } = require("../02_CRUD/crudOperations");

///////////////////////////////////////
// provide a token based on user email
router.post("/create", async (req, res, next) => {
  const data = req.body;
  //validation

  //adding user
  try {
    await add(data);
    console.log("user created");
    res.json({ message: "User saved.", userCreated: true });
    next();
  } catch {
    (err) => {
      console.log("user creation failed");
      res.json({
        message: "User could not be created.",
        error: err,
        userCreated: false,
      });
    };
  }
});

//////////////////////
// validate the token
router.post("/edit", async (req, res) => {});

module.exports = router;
