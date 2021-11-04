module.exports.index = (req, res) => {
  const fakeData = [
    {
      albumId: 1,
      albumName: "Crystal Castles (I)",
      releaseDate: "March 18th, 2008",
      artistId: 64,
    },
    {
      albumId: 2,
      albumName: "One Last Kiss",
      releaseDate: "March 9th, 2021",
      artistId: 15,
    },
    {
      albumId: 3,
      albumName: "The Life of Pablo",
      releaseDate: "February 14, 2016",
      artistId: 54,
    },
  ];
  res.render("tables/albums", { fakeData });
};
