const Joi = require("joi");
const connection = require("../utils/dbcon");

const SongArtist = {
  validateSongArtist: () => {},

  readAll: async () => {
    const con = await connection();

    // const query = `SELECT * FROM songs_artists;`;
    const query = `
      SELECT s.songName, sa.songID, sa.artistID, a.artistName 
      FROM songs_artists sa
      JOIN songs s ON sa.songID = s.songID
      JOIN artists a ON sa.artistID = a.artistID;`;

    const [rows, fields] = await con.execute(query);

    await con.end();

    return rows;
  },

  readFromId: () => {},

  create: () => {},

  update: () => {},

  delete: () => {},
};

module.exports = SongArtist;
