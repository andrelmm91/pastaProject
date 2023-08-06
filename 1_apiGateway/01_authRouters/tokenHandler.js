const { sign, verify } = require("jsonwebtoken");
const KEY = "supersecret";

function createToken(email) {
  return sign({ email }, KEY, { expiresIn: "1h" });
}

function verifyToken(token) {
  return verify(token, KEY);
}

function validateToken(token) {
  try {
    const validatedToken = verifyToken(token);
    return { validation: true, ...validatedToken };
  } catch (error) {
    return { validation: false };
  }
}

exports.createToken = createToken;
exports.validateToken = validateToken;
