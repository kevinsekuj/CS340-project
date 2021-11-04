module.exports.index = (req, res) => {
  const fakeData = [
    {
      songId: 1,
      songName: "Suffocation",
      songLength: "240",
      albumId: 1,
    },
    {
      songId: 1,
      songName: "One Last Kiss",
      songLength: "253",
      albumId: 53,
    },
    {
      songId: 1,
      songName: "Real Friends",
      songLength: "251",
      albumId: 456,
    },
  ];
  res.render("tables/songs", { fakeData });
};
