const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();


const corsOptions = {
  origin: [
    "http://localhost:5173",   // local
    "https://your-frontend.vercel.app" // ✅ ONLY FRONTEND URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware
// app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);



// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected 🔥");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});