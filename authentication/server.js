require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();

// CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Handle JSON
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);
console.log("Auth router mounted at /api/auth");

// Global Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Listening Port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Auth Server listen on port ${PORT}`));
