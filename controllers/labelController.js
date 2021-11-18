const Label = require('../models/label');

module.exports.index = async (req, res) => {
  const data = await Label.readAll();

  res.render('tables/labels', { data });
};
