require("dotenv").config();

const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;

const signToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: "15m" });
};

const refreshToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { signToken, refreshToken, verifyToken };
