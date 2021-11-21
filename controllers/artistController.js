const Artist = require('../models/artist');
const Label = require('../models/label');

module.exports.index = async (req, res) => {
  const data = await Artist.readAll();
  data['labels'] = await Label.readAll();

  res.render('tables/artists', { data });
};

module.exports.search = async (req, res) => {
  const { searchQuery } = req.query;
  const results = await Artist.find(searchQuery);

  const data = {
    query: searchQuery,
    results: results,
  };

  res.render('tables/search', { data });
};

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

// Still in process - last checked could not get controller to trigger from FE
module.exports.update = async (req, res) => {
  const { artistId, artistName, labelId } = req.body;
  console.log('data passed to controller', artistId, artistName, labelId);

  await Artist.update({
    artistId: artistId,
    artistName: artistName,
    labelId: labelId,
  });

  res.redirect('artist');
};

module.exports.delete = async (req, res) => {
  const { id } = req.body;

  await Artist.delete(id);
  res.redirect('artist');
};
