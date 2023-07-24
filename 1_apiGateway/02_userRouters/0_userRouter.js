const express = require("express");
const router = express.Router();

// functionaties
const { createUser } = require("./createUser");
const { editUser } = require("./editUser");
const { readUser } = require("./readUser");
const { deleteUser } = require("./deleteUser");

//protected Routers

///////////////////////////////////////
// router to CREATE a user
router.post("/create", async (req, res) => {
  verifyAuth(req.body.token);
  const data = req.body;

  try {
    const res = await createUser(data);
    res.status(201).json(res);
  } catch {
    console.log("error in creating a user ", data);
  }
});

///////////////////////////////////////
// router to EDIT a user
router.post("/edit", async (req, res) => {
  verifyAuth(req.body.token);
  const data = req.body;

  try {
    const res = await editUser(data);
    res.status(200).json(res);
  } catch {
    console.log("error in editing a user ", data);
  }
});

///////////////////////////////////////
// router to READ a user
router.post("/read", async (req, res) => {
  verifyAuth(req.body.token);
  const data = req.body;

  try {
    const res = await readUser(data);
    res.status(200).json(res);
  } catch {
    console.log("error in reading a user ", data);
  }
});

///////////////////////////////////////
// router to DELETE a user
router.post("/delete", async (req, res) => {
  verifyAuth(req.body.token);
  const data = req.body;

  try {
    const res = await deleteUser(data);
    res.status(200).json(res);
  } catch {
    console.log("error in deleting a user ", data);
  }
});

module.exports = router;
