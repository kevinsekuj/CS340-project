if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join((__dirname, "public"))));

app.listen(3000, (req, res) => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hey");
});

app.all("*", (req, res, next) => {
  next("Page not found", 404);
});

app.use((err, req, res, next) => {
  res.send(err);
});
