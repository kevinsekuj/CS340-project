if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join((__dirname, "public"))));
app.use(methodOverride("_method"));

// Database
// TODO: ideally here just want a "Connected to MYSQL" or "Could not connect"
async function test() {
  // get the client
  const mysql = require("mysql2/promise");
  // create the connection
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  // query database
  const [rows] = await connection.execute("SELECT * FROM `test`");
  console.log(rows);
  console.log("Connected to MySQL server...");
}
test();

// Router
const home = require("./routes/home");
const album = require("./routes/album");
const artist = require("./routes/artist");
const song = require("./routes/song");
const label = require("./routes/label");
const songArtist = require("./routes/songArtist");

app.use("/", home);
app.use("/album", album);
app.use("/artist", artist);
app.use("/song", song);
app.use("/label", label);
app.use("/songartist", songArtist);
//

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.redirect("home");
});

app.all("*", (req, res, next) => {
  next("Page not found", 404);
});

app.use((err, req, res, next) => {
  res.send(err);
});
