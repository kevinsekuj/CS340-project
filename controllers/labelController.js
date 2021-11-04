module.exports.index = (req, res) => {
  const fakeData = [
    { labelId: 1, labelName: "Interscope", dateFounded: "January 1st, 1989" },
    { labelId: 2, labelName: "Sony Music", dateFounded: "January 1st, 1929" },
    { labelId: 3, labelName: "YEAR0001", dateFounded: "January 1st, 2015" },
  ];
  res.render("tables/labels", { fakeData });
};
