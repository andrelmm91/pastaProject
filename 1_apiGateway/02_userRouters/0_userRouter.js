const express = require("express");
const router = express.Router();

// functionaties
const { userCrudHandler } = require("./userCrudHandler");

//protected Routers
///////////////////////////////////////
// router to CREATE a user
router.post("/create", async (req, res) => {
  const data = req.body;
  const crudOperations = "POST";
  const crudDestination = "create";

  try {
    const result = await userCrudHandler(crudOperations, crudDestination, data);
    console.log("I got a result", result);
    res.json(result);
  } catch (err) {
    console.log("Error in creating a user: ", err);
    res.status(400).json({ message: "UM couldn't create a user", error: err });
  }
});

///////////////////////////////////////
// router to EDIT a user
router.post("/edit", async (req, res) => {
  const data = req.body;
  const crudOperations = "PATCH";
  const crudDestination = "edit";

  try {
    const res = await userCrudHandler(crudOperations, crudDestination, data);
    res.status(200).json(res);
  } catch (error) {
    console.log("error in creating a user ", data);
    res.status(400).json(error);
  }
});

///////////////////////////////////////
// router to READ a user
router.post("/read", async (req, res) => {
  const data = req.body;
  const crudOperations = "GET";
  const crudDestination = "read";

  try {
    const res = await userCrudHandler(crudOperations, crudDestination, data);
    res.status(200).json(res);
  } catch (error) {
    console.log("error in creating a user ", data);
    res.status(400).json(error);
  }
});

///////////////////////////////////////
// router to DELETE a user
router.post("/delete", async (req, res) => {
  const data = req.body;
  const crudOperations = "DELETE";
  const crudDestination = "delete";

  try {
    const res = await userCrudHandler(crudOperations, crudDestination, data);
    res.status(200).json(res);
  } catch (error) {
    console.log("error in creating a user ", data);
    res.status(400).json(error);
  }
});

module.exports = router;
