const mongoose = require("mongoose");

const studyGroupSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true, trim: true },
    code: { type: String, required: true, trim: true },
    topic: { type: String, required: true, trim: true },
    members: { type: Number, default: 1, min: 1 },
    nextSession: { type: String, required: true, trim: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudyGroup", studyGroupSchema);
