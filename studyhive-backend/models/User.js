const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    password: { type: String, required: true }, // stored as a bcrypt hash, never plain text
    bio: { type: String, default: "", trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
