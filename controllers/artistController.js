const Artist = require('../models/artist');
const Label = require('../models/label');

module.exports.index = async (req, res) => {
  const data = await Artist.readAll();
  data['labels'] = await Label.readAll();

  res.render('tables/artists', { data });
};

module.exports.create = async (req, res) => {
  const { artistName, labelSelect } = req.body;

  await Artist.create({
    artistName: artistName,
    labelId: labelSelect,
  });

  res.redirect('artist');
};

module.exports.update = async (req, res) => {};

module.exports.delete = async (req, res) => {
  const { id } = req.body;

  await Artist.delete(id);
  res.redirect('artist');
};
