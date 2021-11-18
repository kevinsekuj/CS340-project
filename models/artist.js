const Joi = require("joi");
const connection = require("../utils/dbcon");

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
    const con = await connection();
    const { artistName, labelId } = data;
    let query;

    if (labelId === "null") {
      query = `INSERT INTO ARTISTS (artistName) VALUES ('${artistName}');`;
    } else {
      query = `
        INSERT INTO ARTISTS (artistName, labelID)
        VALUES ('${artistName}', '${labelId}');`;
    }

    const [rows] = await con.execute(query);
    console.log(rows);
    await con.end();

    const { insertId } = rows;
    return insertId;
  },

  update: async (data) => {
    const con = await connection();
    const { artistId, artistName, labelId } = data;
    console.log("data passed to model", data);

    const query = `
    UPDATE ARTISTS
    SET artistName = ${artistName}, labelId = ${labelId}
    WHERE artistId = ${artistId}
    `;

    await con.execute(query);
    await con.end();
  },

  delete: async (id) => {
    const con = await connection();
    const query = `DELETE FROM ARTISTS WHERE artistID = ${id}`;
    await con.execute(query);
    await con.end();
  },
};

module.exports = Artist;
