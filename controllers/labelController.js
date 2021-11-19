const Label = require("../models/label");

module.exports.index = async (req, res) => {
  const data = await Label.readAll();

  res.render("tables/labels", { data });
};

module.exports.create = async (req, res) => {
  const { labelName, dateFounded } = req.body;

  await Label.create({
    labelName: labelName,
    dateFounded: dateFounded,
  });

  res.redirect("label");
};
