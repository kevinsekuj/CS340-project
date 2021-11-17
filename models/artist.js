const Joi = require('joi');
const connection = require('../utils/dbcon');

const Artist = {
  validateArtist: () => {},

  readAll: async () => {
    const con = await connection();

    const query = `SELECT * from ARTISTS;`;
    const [rows, fields] = await con.execute(query);

    await con.end();

    return rows;
  },

  readFromId: () => {},

  create: async (data) => {
    // error handling, empty body etc

    const { artistName, labelId } = data;

    const con = await connection();

    const query = `INSERT INTO ARTISTS (artistName, labelID)
    VALUES ('${artistName}', '${labelId}');`;

    await con.execute(query, [artistName, labelId]);
    await con.end();
  },

  update: () => {},

  delete: async (id) => {
    const con = await connection();
    const query = `DELETE FROM ARTISTS WHERE artistID = ${id}`;

    await con.execute(query);
    await con.end();
  },
};

module.exports = Artist;
