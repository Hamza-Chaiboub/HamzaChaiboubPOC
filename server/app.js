const express = require("express");
const foodStore = require("./foodStore");
const path = require("path");
const app = express();

app.use(express.json());

// serve the frontend files from the public folder
app.use(express.static(path.join(__dirname, "../public")));

// GET /foods returns every food from the singleton store
app.get("/foods", (req, res) => {
  const foods = foodStore.getAll();
  console.log(`GET /foods: returning ${foods.length} foods`);
  res.status(200).json(foods);
});

// return a JSON error for unmatched routes
app.use((req, res) => {
  console.log(`404: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: "Route not found" });
});

// export the app so automated tests can use it
module.exports = app;