// functionalities
const { validateToken } = require("../01_authRouters/tokenHandler");

async function protRouter(token, req, res, next) {
  // const token = req.body.token;
  console.log("I passed here second", token);

  const validation = await validateToken(token.token);
  console.log("the token is: ", validation);

  try {
    if (!validation) {
      console.log("not authorized or token expired.", validation);
      res.status(403).json("unathorized access");
    } else {
      console.log("authorized");
      // return true; // token valid, continue with routing
      next();
    }
  } catch {
    console.log("error in validating the token ", token);
  }
}

exports.protRouter = protRouter;
