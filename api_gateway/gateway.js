require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT;
const SECRET = process.env.SECRET_KEY;

const cors = require("cors");

// CORS
app.use(
  cors({
    origin: "http://localhost:3000", // or your Nuxt frontend origin
    credentials: true,
  })
);

// JSON
app.use(express.json());

// Middleware: JWT Verification
function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

app.use("/auth", (req, res, next) => {
  console.log(`[Gateway] Incoming: ${req.method} ${req.originalUrl}`);
  next();
});
// Proxy: Auth Service (No JWT Required)
app.use(
  "/auth",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { "^/auth": "/api/auth" },
  })
);

// Proxy: User Service (JWT Required)
app.use(
  "/api/user",
  authenticateJWT,
  createProxyMiddleware({
    target: process.env.USER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/user": "/api/user" },
    onProxyReq: (proxyReq, req) => {
      proxyReq.setHeader("x-user-id", req.user.id);
    },
  })
);

// Optional fallback
app.use((req, res) => {
  res.status(404).json({ message: "Route not found in gateway." });
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
