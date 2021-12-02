/*
  The SongArtist model is exported to the SongArtistController.
  SongArtist model is where all database interaction occurs for the SongArtist 
  table.
*/

const connection = require("../utils/dbcon");

const SongArtist = {

  // READ ALL song-artist intersections
  readAll: async () => {
    const con = await connection();

    const query = `
      SELECT s.songName, sa.songID, sa.artistID, a.artistName 
      FROM songs_artists sa
      JOIN songs s ON sa.songID = s.songID
      JOIN artists a ON sa.artistID = a.artistID;
      `;
    const [rows] = await con.execute(query);

    await con.end();
    return rows;
  },

  // CREATE NEW song-artist intersection
  create: async (data) => {
    const con = await connection();
    const { songId, artistId } = data;

    const query = `
      INSERT INTO SONGS_ARTISTS (songID, artistID)
      VALUES ('${songId}', '${artistId}');
      `;
    const [rows] = await con.execute(query);
    const { insertId } = rows;

    await con.end();
    return insertId;
  },
};

module.exports = SongArtist;
