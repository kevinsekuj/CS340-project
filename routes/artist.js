const express = require("express");
const router = express.Router();
const artist = require("../controllers/artistController");

router.route("/").get(artist.index);

module.exports = router;