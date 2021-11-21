const SongArtist = require("../models/songArtist");
const Song = require("../models/song");
const Artist = require("../models/artist");

module.exports.index = async (req, res) => {
  const data = await SongArtist.readAll();
  data["songs"] = await Song.readAll();
  data["artists"] = await Artist.readAll();

  res.render("tables/songsArtists", { data });
};

module.exports.create = async (req, res) => {
  const { songDropdown, artistDropdown } = req.body;

  await SongArtist.create({
    songId: songDropdown,
    artistId: artistDropdown,
  });

  res.redirect("/songArtist");
};
