const Album = require("../models/album");
const Artist = require("../models/artist");

module.exports.index = async (req, res) => {
  const data = await Album.readAll();
  data.artists = await Artist.readAll();

  res.render("tables/albums", { data });
};

module.exports.create = async (req, res) => {
  const { albumName, releaseDate, artistSelect } = req.body;

  await Album.create({
    albumName: albumName,
    releaseDate: releaseDate,
    artistId: artistSelect,
  });

  res.redirect("album");
};
