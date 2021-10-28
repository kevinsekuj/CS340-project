const express = require("express");
const router = express.Router();
const label = require("../controllers/labelController");

router.route("/").get(label.index);

module.exports = router;
