const Artist = require('../models/artist');

module.exports.index = async (req, res) => {
  const data = await Artist.readAll();

  res.render('tables/artists', { data });
};

module.exports.create = async (req, res) => {
  const { artistName, labelId } = req.body;

  const newRowId = await Artist.create({
    artistName: artistName,
    labelId: labelId,
  });

  //res.send(JSON.stringify({ artistName, labelId, newRowId }));
  console.log('This code just ran.');
  res.redirect('artist');
};

module.exports.update = async (req, res) => {};

module.exports.delete = async (req, res) => {
  const { id } = req.body;

  await Artist.delete(id);
  res.redirect('artist');
};
