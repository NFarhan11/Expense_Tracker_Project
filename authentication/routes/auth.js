const express = require("express");
const router = express.Router();
const { signToken, verifyToken } = require("../utils/jwt");
const pool = require("../database/user");
const bcrypt = require("bcrypt");

// Register User
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    const result = await pool.query(
      "SELECT email FROM users WHERE email = $1",
      [email]
    );
    if (result.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, email",
      [name, email, hashedPassword]
    );

    // Generate JWT
    const token = signToken({
      email: newUser.rows[0].email,
      id: newUser.rows[0].id,
    });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT id, email, password FROM users WHERE email = $1",
      [email]
    );
    const user = result.rows[0];
    console.log(result);

    // No matching credentials
    if (!user) {
      return res.status(401).json({ message: "No credentials in DB" });
    }
    // Validate password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Password is invalid" });
    }

    // Sign token
    const token = signToken({ email, id: 1 });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
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
