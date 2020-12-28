const JWT = require("jsonwebtoken");

const SIGNING_KEY = "asdfghjklzxcvbnmqwertyuiop";

function generateJWT(payload) {
  return JWT.sign(payload, SIGNING_KEY, { expiresIn: "1d" });
}

function extractUser(user) {
  const { password: dbPassword, ...extractedUser } = JSON.parse(
    JSON.stringify(user)
  );
  return extractedUser;
}

module.exports = {
  SIGNING_KEY,
  generateJWT,
  extractUser,
};