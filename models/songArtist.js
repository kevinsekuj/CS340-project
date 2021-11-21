const connection = require("../utils/dbcon");

const SongArtist = {
  readAll: async () => {
    const con = await connection();

    const query = `
      SELECT s.songName, sa.songID, sa.artistID, a.artistName 
      FROM songs_artists sa
      JOIN songs s ON sa.songID = s.songID
      JOIN artists a ON sa.artistID = a.artistID;`;

    const [rows] = await con.execute(query);

    await con.end();

    return rows;
  },

  create: async (data) => {
    const con = await connection();

    const { songId, artistId } = data;

    const query = `
      INSERT INTO SONGS_ARTISTS (songID, artistID)
      VALUES ('${songId}', '${artistId}');`;

    const [rows] = await con.execute(query);
    await con.end();

    const { insertId } = rows;
    return insertId;
  },
};

module.exports = SongArtist;
