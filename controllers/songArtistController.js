/*
  The SongArtistController passes SONGS_ARTISTS table data back and forth
  between database and client.
*/

const SongArtist = require("../models/songArtist");
const Song = require("../models/song");
const Artist = require("../models/artist");

// Index is invoked when user visits SongArtist page.
module.exports.index = async (req, res) => {
  const data = await SongArtist.readAll();
  data["songs"] = await Song.readAll();
  data["artists"] = await Artist.readAll();

  res.render("tables/songsArtists", { data });
};

// Create is invoked when user submits a new SongArtist relationship to enter.
module.exports.create = async (req, res) => {
  const { songSelect, artistSelect } = req.body;

  await SongArtist.create({
    songId: songSelect,
    artistId: artistSelect,
  });

  res.redirect("/songArtist");
};
