const express = require("express");
const router = express.Router();
const StudyGroup = require("../models/StudyGroup");

// GET all study groups
router.get("/", async (req, res) => {
  try {
    const groups = await StudyGroup.find().sort({ createdAt: -1 });
    res.json(groups);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch study groups", error: err.message });
  }
});

// POST a new study group
router.post("/", async (req, res) => {
  try {
    const { subject, code, topic, members, nextSession } = req.body;

    if (!subject || !code || !topic || !nextSession) {
      return res.status(400).json({ message: "subject, code, topic and nextSession are required" });
    }

    const newGroup = new StudyGroup({ subject, code, topic, members, nextSession });
    const savedGroup = await newGroup.save();
    res.status(201).json(savedGroup);
  } catch (err) {
    res.status(500).json({ message: "Failed to create study group", error: err.message });
  }
});

// DELETE a study group
router.delete("/:id", async (req, res) => {
  try {
    const deletedGroup = await StudyGroup.findByIdAndDelete(req.params.id);
    if (!deletedGroup) {
      return res.status(404).json({ message: "Study group not found" });
    }
    res.json({ message: "Study group deleted", id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete study group", error: err.message });
  }
});

module.exports = router;
