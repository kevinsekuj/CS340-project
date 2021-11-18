const Song = require('../models/song');

module.exports.index = async (req, res) => {
  const data = await Song.readAll();

  res.render('tables/songs', { data });
};
