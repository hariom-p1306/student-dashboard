const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER API
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create new user
    const newUser = new User({ email, password });
    await newUser.save();

    res.json({ message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// LOGIN API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: {
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;