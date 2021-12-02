/*
  The Album model is exported to the AlbumController.
  Album model is where all database interaction occurs for the Album table.
*/

const connection = require("../utils/dbcon");

const Album = {

  // READ ALL albums
  readAll: async () => {
    const con = await connection();

    const query = `SELECT albumID, albumName, DATE_FORMAT(releaseDate, '%M %d, %Y') AS releaseDate, artistID FROM albums;`;
    const [rows] = await con.execute(query);

    await con.end();
    return rows;
  },

  // CREATE NEW album
  create: async (data) => {
    const con = await connection();
    const { albumName, releaseDate, artistId } = data;

    if (artistId === "null") {
      console.log("cannot insert album without artist");
      return;
    }
    let query = `
      INSERT INTO ALBUMS (albumName, releaseDate, artistID)
      VALUES ('${albumName}', '${releaseDate}', '${artistId}')`;
    const [rows] = await con.execute(query);
    const { insertId } = rows;

    await con.end();
    return insertId;
  },
};

module.exports = Album;
