/*
  The AlbumController passes Album table data back and forth from database 
  and client.
*/

const Album = require("../models/album");
const Artist = require("../models/artist");

// Index is invoked when user loads the Albums page.
module.exports.index = async (req, res) => {
  const data = await Album.readAll();
  data.artists = await Artist.readAll();

  res.render("tables/albums", { data });
};

// Create is invoked when client submits a new Album row to enter.
module.exports.create = async (req, res) => {
  const { albumName, releaseDate, artistSelect } = req.body;

  await Album.create({
    albumName: albumName,
    releaseDate: releaseDate,
    artistId: artistSelect,
  });

  res.redirect("album");
};
