const connection = require("../utils/dbcon");

const Album = {
  readAll: async () => {
    const con = await connection();

    const query = `SELECT albumID, albumName, DATE_FORMAT(releaseDate, '%M %d, %Y') AS releaseDate, artistID FROM albums;`;
    const [rows, fields] = await con.execute(query);

    await con.end();

    return rows;
  },

  create: async (data) => {
    const con = await connection();
    const { albumName, releaseDate, artistId } = data;

    console.log(albumName, releaseDate, artistId);

    if (artistId === "null") {
      console.log("cannot insert album without artist");
      return;
    }

    let query = `
    INSERT INTO ALBUMS (albumName, releaseDate, artistId)
    VALUES ('${albumName}', '${releaseDate}', '${artistId}')`;

    const [rows] = await con.execute(query);
    console.log(rows);
    await con.end();

    const { insertId } = rows;
    return insertId;
  },
};

module.exports = Album;
