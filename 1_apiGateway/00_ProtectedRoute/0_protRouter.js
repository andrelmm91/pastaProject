// functionalities
const { validateToken } = require("../01_authRouters/tokenHandler");

async function protRouter({ token }, req, res, next) {
  const validation = await validateToken(token);
  console.log("the token is aaa: ", validation);

  try {
    if (!validation) {
      console.error("not authorized or token expired.", validation);
      res.status(403).json("unathorized access");
    } else {
      console.error("authorized");
      // return true; // token valid, continue with routing
      return;
    }
  } catch {
    console.error("error in validating the token ", token);
  }
}

exports.protRouter = protRouter;
