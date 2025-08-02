const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).json({ msg: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
