const express = require("express");
const router = express.Router();
const songArtist = require("../controllers/songArtistController");

router.route("/").get(songArtist.index).post(songArtist.create);

module.exports = router;
