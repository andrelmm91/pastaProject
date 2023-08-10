// functionalities
const {
  validateToken,
} = require("../../3_authManager/01_handler/tokenHandler");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = await validateToken(token);
    const userEmail = decodedToken.email;
    // console.log("I passed here auth 2", token);
    // console.log("I passed here auth 2", userEmail, req.body.email);
    // console.log("I passed here auth 2", decodedToken);

    if (decodedToken.validation && req.body.email === userEmail) {
      console.log("authorized");
      next();
    } else {
      console.log("NOT authorized");
      res.status(401).json({
        error: "Invalid request or unanthorized",
      });
    }
  } catch {
    console.log("NOT authorized");
    res.status(401).json({
      error: "Invalid request or unanthorized",
    });
  }
};
