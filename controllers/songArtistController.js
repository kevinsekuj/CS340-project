const SongArtist = require("../models/songArtist");

module.exports.index = async (req, res) => {
  const data = await SongArtist.readAll();
  res.render("tables/songsArtists", { data });
};
