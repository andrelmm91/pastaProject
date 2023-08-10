// functionalities
const { validateToken } = require("../01_authRouters/authHandler");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const crudDestination = "validate";
    // console.log("I passed here auth 2", token);
    const decodedToken = await validateToken(crudDestination, { token: token });
    const userEmail = decodedToken.email;
    // console.log("I passed here auth 2", userEmail, req.body.email);
    // console.log("I passed here auth 2", decodedToken);

    if (decodedToken.validation && req.body.email === userEmail) {
      console.log("authorized");
      next();
    } else {
      console.log("xablau NOT authorized");
      res.status(401).json({
        error: "Invalid request or unanthorized",
      });
    }
  } catch (err) {
    console.log("NOT authorized", err);
    res.status(401).json({
      error: "Invalid request or unanthorized",
    });
  }
};
