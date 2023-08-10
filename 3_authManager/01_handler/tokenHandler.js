const { sign, verify } = require("jsonwebtoken");
const KEY = "supersecret";

function createToken(email) {
  return sign({ email }, KEY, { expiresIn: "1h" });
}

function validateToken(token) {
  return verify(token, KEY);
}

exports.createToken = createToken;
exports.validateToken = validateToken;
