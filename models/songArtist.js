const Joi = require("joi");
const connection = require("../utils/dbcon");

const SongArtist = {
  validateSongArtist: () => {},

  readAll: async () => {
    const con = await connection();

    const query = `SELECT * FROM songs_artists;`;
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
