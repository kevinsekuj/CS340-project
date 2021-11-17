const Artist = require('../models/artist');

module.exports.index = async (req, res) => {
  const data = await Artist.readAll();

  res.render('tables/artists', { data });
};

module.exports.create = async (req, res) => {
  const { artistName, labelId } = req.body;

  await Artist.create({
    artistName: artistName,
    labelId: labelId,
  });

  // if we don't want refreshes
  // res.send(JSON.stringify({ artistName, labelId }));

  res.redirect('artist');
};

module.exports.update = async (req, res) => {};

module.exports.delete = async (req, res) => {
  const { id } = req.body;

  await Artist.delete(id);
  res.redirect('artist');
};
