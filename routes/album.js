const express = require("express");
const router = express.Router();
const album = require("../controllers/albumController");

router.route("/").get(album.index).post(album.create);

module.exports = router;
