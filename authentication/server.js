import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

// CORS
app.use(
  cors({
    origin: process.env.GATEWAY_URL,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Handle JSON
app.use(express.json());

app.use("/api/auth", (req, res, next) => {
  console.log(`[Auth Service] Received: ${req.method} ${req.originalUrl}`);
  next();
});

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
