/*
  The Artist model is exported to the ArtistController.
  Artist model is where all database interaction occurs for the Artist table.
*/

const connection = require("../utils/dbcon");

const Artist = {
  validateArtist: () => {},

  // SEARCH an artist
  find: async (userSearchQuery) => {
    const con = await connection();
    const query = `
      SELECT * FROM artists WHERE artistName LIKE '${userSearchQuery}%';
      `;
    const [rows] = await con.execute(query);

    await con.end();
    return rows;
  },

  // READ ALL artists
  readAll: async () => {
    const con = await connection();
    const query = `SELECT * from ARTISTS;`;
    const [rows] = await con.execute(query);

    await con.end();
    return rows;
  },

  // CREATE NEW artist
  create: async (data) => {
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
    const { insertId } = rows;

    await con.end();
    return insertId;
  },

  // UPDATE existing artist
  update: async (data) => {
    const con = await connection();
    const { artistId, artistName, labelId } = data;
    let query;

    // Different queries to handle empty optional fields
    if (labelId === 'null') {
      query = `
        UPDATE ARTISTS
        SET artistName = '${artistName}', labelId = NULL
        WHERE artistId = ${artistId};`;
    } else {
      query = `
        UPDATE ARTISTS
        SET artistName = '${artistName}', labelId = ${labelId}
        WHERE artistId = ${artistId};`;
    }
    const [rows] = await con.execute(query);
    const { insertId } = rows;

    await con.end();
    return insertId
  },

  // DELETE artist
  delete: async (id) => {
    const con = await connection();

    // Deleting an artist also deletes their songs, since songs require
    // an artist, and also deletes that artist's albums
    let query = `
      DELETE s FROM songs s
      JOIN songs_artists sa ON sa.songID = s.songID
      WHERE sa.artistID = ${id};
      `;
    await con.execute(query);

    query = `
      DELETE a FROM albums a
      WHERE a.artistID = ${id};
      `;
    await con.execute(query);

    query = `
      DELETE FROM ARTISTS WHERE artistID = ${id};
      `;
    await con.execute(query);

    await con.end();
  },
};

module.exports = Artist;
