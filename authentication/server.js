const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(4000, () => console.log("Auth Server listen on port 4000"));
