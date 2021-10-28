const express = require("express");
const router = express.Router();
const song = require("../controllers/songController");

router.route("/").get(song.index);

module.exports = router;
