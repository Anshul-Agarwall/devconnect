const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

console.log("Message model:", Message);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Message.findOne({ email, password }); // checks both together

    if (user) {
      return res.status(200).json({ success: true, message: "Login successful" });
    }

    res.status(200).json({ success: false, message: "Invalid email or password" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;