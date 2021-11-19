const Song = require("../models/song");
const Album = require("../models/album");

module.exports.index = async (req, res) => {
  const data = await Song.readAll();
  data["albums"] = await Album.readAll();

  res.render("tables/songs", { data });
};

module.exports.create = async (req, res) => {
  const { songName, songLength, albumSelect } = req.body;

  await Song.create({
    songName: songName,
    songLength: songLength,
    albumId: albumSelect,
  });

  res.redirect("/song");
};
