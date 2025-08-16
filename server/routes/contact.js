const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
//POST /api/contact
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const newMessage = new Message({ email, password });
    await newMessage.save();
    res.status(200).json({ msg: "Sign up Successful. Please Login" });
  } catch (error) {
    res.status(500).json({ error: "Failed to Sign you up" });
  }
});

module.exports = router;
