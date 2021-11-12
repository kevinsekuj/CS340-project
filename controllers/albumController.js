const Album = require("../models/album");

module.exports.index = async (req, res) => {
  const data = await Album.readAll();
  res.render("tables/albums", { data });
};
