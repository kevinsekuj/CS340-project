const express = require("express");
const router = express.Router();
const search = require("../controllers/searchController");

router.route("/").get(search.index);

module.exports = router;
