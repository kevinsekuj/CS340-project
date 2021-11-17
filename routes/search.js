const express = require("express");
const router = express.Router();
const label = require("../controllers/searchController");

router.route("/").get(search.index);

module.exports = router;
