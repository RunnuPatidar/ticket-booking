const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// static files serve karna (HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Seat page
app.get("/seat", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "seat.html"));
});

// Server start
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

