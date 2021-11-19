const Song = require("../models/song");

module.exports.index = async (req, res) => {
  const data = await Song.readAll();

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
