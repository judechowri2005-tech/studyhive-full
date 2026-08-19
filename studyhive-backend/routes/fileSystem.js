const express = require("express");
const {
  readDetails,
  writeDetails,
  appendDetails,
  deleteDetails,
} = require("../modules/fileSystem");

const router = express.Router();

function getTextData(req, res) {
  if (typeof req.body?.data !== "string") {
    res.status(400).json({ message: "data must be a string" });
    return null;
  }
  return req.body.data;
}

router.get("/", async (req, res) => {
  try {
    res.type("text").send(await readDetails());
  } catch (err) {
    res.status(500).json({ message: "Failed to read details", error: err.message });
  }
});

router.put("/", async (req, res) => {
  const data = getTextData(req, res);
  if (data === null) return;

  try {
    await writeDetails(data);
    res.json({ message: "Details written" });
  } catch (err) {
    res.status(500).json({ message: "Failed to write details", error: err.message });
  }
});

router.post("/append", async (req, res) => {
  const data = getTextData(req, res);
  if (data === null) return;

  try {
    await appendDetails(data);
    res.json({ message: "Details appended" });
  } catch (err) {
    res.status(500).json({ message: "Failed to append details", error: err.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    await deleteDetails();
    res.json({ message: "Details deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete details", error: err.message });
  }
});

module.exports = router;