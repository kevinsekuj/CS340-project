const SongArtist = require("../models/songArtist");

module.exports.index = async (req, res) => {
  const data = await SongArtist.readAll();
  console.log(data);
  res.render("tables/songsArtists", { data });
};
