// functionalities
const { validateToken } = require("../01_authRouters/tokenHandler");

module.exports = async (req, res, next) => {
  console.log("I passed here auth");
  try {
    // const token = req.headers.authorization.split(" ")[1];
    const decodedToken = await validateToken(req.headers.authorization);
    const userEmail = decodedToken.email;
    console.log("I passed here auth 2", req.headers.authorization);
    console.log("I passed here auth 2", userEmail, req.body.email);
    console.log("I passed here auth 2", decodedToken);

    if (decodedToken.validation && req.body.email === userEmail) {
      console.log("I passed here auth 3 authed");
      next();
    } else {
      res.status(401).json({
        error: "Invalid request or unanthorized",
      });
    }
  } catch {
    res.status(401).json({
      error: "Invalid request or unanthorized",
    });
  }
};
