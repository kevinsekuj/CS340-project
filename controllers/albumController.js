const Album = require("../models/album");
const Artist = require("../models/artist");

module.exports.index = async (req, res) => {
  const data = await Album.readAll();
  data.artists = await Artist.readAll();

  console.log(data);
  res.render("tables/albums", { data });
};
