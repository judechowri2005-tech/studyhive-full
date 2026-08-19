require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const studyGroupRoutes = require("./routes/studyGroups");
const messageRoutes = require("./routes/messages");
const fileSystemRoutes = require("./routes/fileSystem");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/studyhive";

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/study-groups", studyGroupRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/file-system", fileSystemRoutes);

app.get("/", (req, res) => {
  res.send("StudyHive API is running");
});

// Connect to MongoDB (same URI Compass uses), then start the server.
// Compass will show a "studyhive" database with "users", "studygroups",
// and "messages" collections once you start using the app.
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB:", MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
