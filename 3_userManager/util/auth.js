const { sign, verify } = require("jsonwebtoken");
const KEY = "supersecret";

function createJSONToken(email) {
  return sign({ email }, KEY, { expiresIn: "1h" });
}

function verifyToken(token) {
  return verify(token, KEY);
}

function validateJSONToken(token) {
  try {
    const validatedToken = verifyToken(token);
    return true;
  } catch (error) {
    return false;
  }
}

exports.createJSONToken = createJSONToken;
exports.validateJSONToken = validateJSONToken;
