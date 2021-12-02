/*
  The LabelController passes Label table data back and forth from database 
  and client.
*/

const Label = require("../models/label");

// Index is invoked when user visits the Label page.
module.exports.index = async (req, res) => {
  const data = await Label.readAll();

  res.render("tables/labels", { data });
};

// Create is invoked when user submits a Label row to enter.
module.exports.create = async (req, res) => {
  const { labelName, dateFounded } = req.body;

  await Label.create({
    labelName: labelName,
    dateFounded: dateFounded,
  });

  res.redirect("label");
};
