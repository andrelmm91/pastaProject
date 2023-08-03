const express = require("express");
const router = express.Router();

// functionaties
const { userCrudHandler } = require("./userCrudHandler");
const { protRouter } = require("../00_ProtectedRoute/0_protRouter");

//protected Routers
///////////////////////////////////////
// router to CREATE a user
router.post("/create", async (req, res) => {
  console.log("I passed here first", req.body.token);
  protRouter({ token: req.body.token });

  // const data = req.body;
  // const crudOperations = "POST";
  // const crudDestination = "create";

  // try {
  //   const res = await userCrudHandler(crudOperations, crudDestination, data);
  //   res.status(201).json(res);
  // } catch {
  //   console.log("error in creating a user ", data);
  // }
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
  } catch {
    console.log("error in editing a user ", data);
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
  } catch {
    console.log("error in reading a user ", data);
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
  } catch {
    console.log("error in deleting a user ", data);
  }
});

module.exports = router;
