/*
  The Song model is exported to the SongController.
  Song model is where all database interaction occurs for the Song table.
*/

const connection = require("../utils/dbcon");

const Song = {
  readAll: async () => {
    const con = await connection();

    const query = `SELECT * from SONGS;`;
    const [rows] = await con.execute(query);

    await con.end();
    return rows;
  },

  create: async (data) => {
    const con = await connection();
    const { songName, songLength, albumId } = data;
    let query;

    // QUERY varies depending on which optional fields are present
    if (albumId === "null" && !songLength) {
      query = `
        INSERT INTO SONGS (songName)
        VALUES ('${songName}');`;
    } else if (albumId === "null") {
      query = `
        INSERT INTO SONGS (songName, songLength)
        VALUES ('${songName}', '${songLength}');`;
    } else if (!songLength) {
      query = `
        INSERT INTO SONGS (songName, albumID)
        VALUES ('${songName}', '${albumId}');`;
    } else {
      query = `
        INSERT INTO SONGS (songName, songLength, albumID)
        VALUES ('${songName}', '${songLength}', '${albumId}');`;
    }
    const [rows] = await con.execute(query);
    const { insertId } = rows;

    await con.end();
    return insertId;
  },
};

module.exports = Song;
