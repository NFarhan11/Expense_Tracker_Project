import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();
const SECRET = process.env.SECRET_KEY;

const signToken = (payload) => {
  return jsonwebtoken.sign(payload, SECRET, { expiresIn: "15m" });
};

const refreshToken = (payload) => {
  return jsonwebtoken.sign(payload, SECRET, { expiresIn: "7d" });
};

const verifyToken = (token) => {
  return jsonwebtoken.verify(token, SECRET);
};

module.exports = { signToken, refreshToken, verifyToken };
