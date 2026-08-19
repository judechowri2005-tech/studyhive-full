const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// GET the last 50 messages, oldest first
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(50);
    res.json(messages.reverse());
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages", error: err.message });
  }
});

// POST a new message
router.post("/", async (req, res) => {
  try {
    const { sender, text } = req.body;

    if (!sender || !text) {
      return res.status(400).json({ message: "sender and text are required" });
    }

    const message = await Message.create({ sender, text });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ message: "Failed to send message", error: err.message });
  }
});

module.exports = router;
