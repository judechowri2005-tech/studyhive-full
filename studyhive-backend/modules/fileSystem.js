const fs = require("fs").promises;
const path = require("path");

const dataDirectory = path.join(__dirname, "..", "data");
const detailsFile = path.join(dataDirectory, "details.txt");

async function ensureDetailsFile() {
  await fs.mkdir(dataDirectory, { recursive: true });
  try {
    await fs.access(detailsFile);
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
    await fs.writeFile(detailsFile, "", "utf8");
  }
}

async function readDetails() {
  await ensureDetailsFile();
  return fs.readFile(detailsFile, "utf8");
}

async function writeDetails(data) {
  await ensureDetailsFile();
  await fs.writeFile(detailsFile, data, "utf8");
}

async function appendDetails(data) {
  await ensureDetailsFile();
  await fs.appendFile(detailsFile, data, "utf8");
}

async function deleteDetails() {
  try {
    await fs.unlink(detailsFile);
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
  }
}

module.exports = {
  readDetails,
  writeDetails,
  appendDetails,
  deleteDetails,
};