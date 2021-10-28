const express = require("express");
const router = express.Router();
const songArtist = require("../controllers/songArtistController");

router.route("/").get(songArtist.index);

module.exports = router;
