const Search = require("../models/Search");
const { search } = require("../routes/home");

module.exports.index = async (req, res) => {
  const { searchQuery } = req.query;
  const data = await Search.find();
  res.render("tables/search", { data });
};
