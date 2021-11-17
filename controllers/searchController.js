const Search = require("../models/Search");

module.exports.index = async (req, res) => {
  const data = await Search.find(); // need to pass search param..?
  res.render("tables/search", { data });
};
