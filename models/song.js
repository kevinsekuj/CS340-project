const Joi = require('joi');
const connection = require('../utils/dbcon');

const Song = {
  validateSong: () => {},

  readAll: async () => {
    const con = await connection();

    const query = `SELECT * from SONGS;`;
    const [rows, fields] = await con.execute(query);

    await con.end();

    return rows;
  },

  readFromId: () => {},

  create: () => {},

  update: () => {},

  delete: () => {},
};

module.exports = Song;
