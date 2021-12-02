/*
  The SongController passes Album table data back and forth from database 
  and client.
*/

const Song = require("../models/song");
const Album = require("../models/album");

// Index is invoked when user loads Songs page.
module.exports.index = async (req, res) => {
  const data = await Song.readAll();
  data["albums"] = await Album.readAll();

  res.render("tables/songs", { data });
};

// Create is invoked when client submits a new Song row to enter.
module.exports.create = async (req, res) => {
  const { songName, songLength, albumSelect } = req.body;

  await Song.create({
    songName: songName,
    songLength: songLength,
    albumId: albumSelect,
  });

  res.redirect("/song");
};
