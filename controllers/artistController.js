const Artist = require('../models/artist');

module.exports.index = async (req, res) => {
  const data = await Artist.readAll();
  res.render('tables/artists', { data });
};
