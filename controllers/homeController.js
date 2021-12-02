const Song = require('../models/song');
const Album = require('../models/album');
const Artist = require('../models/artist');
const Label = require('../models/label');

module.exports.index = async (req, res) => {
  const songs = await Song.readAll();
  const albums = await Album.readAll();
  const artists = await Artist.readAll();
  const labels = await Label.readAll();

  const data = {
    songs: songs.length,
    albums: albums.length,
    artists: artists.length,
    labels: labels.length,
  };
  res.render('index', { data });
};
