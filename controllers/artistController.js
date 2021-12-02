/*
  The ArtistController passes Artist table data back and forth between database 
  and client.
*/

const Artist = require('../models/artist');
const Label = require('../models/label');

// Index is invoked when user loads the Artists page.
module.exports.index = async (req, res) => {
  const data = await Artist.readAll();
  data['labels'] = await Label.readAll();

  res.render('tables/artists', { data });
};

// Search is invoked when client submits a search query for artists.
module.exports.search = async (req, res) => {
  const { searchQuery } = req.query;
  const results = await Artist.find(searchQuery);

  const data = {
    query: searchQuery,
    results: results,
  };

  res.render('tables/search', { data });
};

// Create is invoked when client submits a new Artist row to enter.
module.exports.create = async (req, res) => {
  const { artistName, labelSelect } = req.body;

  const insertId = await Artist.create({
    artistName: artistName,
    labelId: labelSelect,
  });

  if (insertId) {
    res.redirect('artist');
  }
};

// Update is invoked when client submits an edit to an existing Artist row.
module.exports.update = async (req, res) => {
  const { artistId, artistName, labelId } = req.body;

  await Artist.update({
    artistId: artistId,
    artistName: artistName,
    labelId: labelId,
  });

  res.redirect('artist');
};

// Delete is invoked when an Artist row, its Songs, and its Albums are to be
// deleted.
module.exports.delete = async (req, res) => {
  const { id } = req.body;

  await Artist.delete(id);
  res.redirect('artist');
};
