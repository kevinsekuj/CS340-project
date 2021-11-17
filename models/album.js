const connection = require('../utils/dbcon');

const Album = {
  readAll: async () => {
    const con = await connection();

    const query = `SELECT albumID, albumName, DATE_FORMAT(releaseDate, '%M %d, %Y') AS releaseDate, artistID FROM albums;`;
    const [rows, fields] = await con.execute(query);

    await con.end();

    return rows;
  },
};

module.exports = Album;
