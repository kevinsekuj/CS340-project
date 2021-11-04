module.exports.index = (req, res) => {
  const fakeData = [
    {
      songName: "Vanished",
      songId: 1,
      artistId: 1,
      artistName: "Crystal Castles",
    },
    {
      songName: "One Last Kiss",
      songId: 2,
      artistId: 20,
      artistName: "Hikaru Utada",
    },
    {
      songName: "First Love",
      songId: 21,
      artistId: 20,
      artistName: "Hikaru Utada",
    },
    {
      songName: "Lollipop Remix ft. Kanye West",
      songId: 35,
      artistId: 3,
      artistName: "Kanye West",
    },
  ];

  res.render("tables/songsArtists", { fakeData });
};
