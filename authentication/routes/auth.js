const express = require("express");
const { signToken, verifyToken } = require("../utils/jwt");
const router = express.Router();

// Login User @ Sign Token
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== "test" || password !== "password") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = signToken({ username, id: 1 });
  res.json({ token });
});

// Verify User Token
router.get("/verify", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const payload = verifyToken(token);
    res.json({ user: payload });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});

module.exports = router;
