module.exports.index = (req, res) => {
  const fakeData = [
    { artistId: 1, artistName: "Crystal Castles", labelId: 2 },
    { artistId: 2, artistName: "Hikaru Utada", labelId: 1 },
    { artistId: 3, artistName: "Kanye West", labelId: 53 },
  ];

  res.render("tables/artists", { fakeData });
};
