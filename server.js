const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");


const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connect database
connectDB();

// routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

app.get("/", (req, res) => {
    res.send("API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});