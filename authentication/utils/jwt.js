import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();
const SECRET = process.env.SECRET_KEY;

export const signToken = (payload) => {
  return jsonwebtoken.sign(payload, SECRET, { expiresIn: "15m" });
};

export const refreshToken = (payload) => {
  return jsonwebtoken.sign(payload, SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token) => {
  return jsonwebtoken.verify(token, SECRET);
};
