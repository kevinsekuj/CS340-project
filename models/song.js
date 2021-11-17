const connection = require('../utils/dbcon');

const Song = {
  readAll: async () => {
    const con = await connection();

    const query = `SELECT * from SONGS;`;
    const [rows, fields] = await con.execute(query);

    await con.end();

    return rows;
  },
};

module.exports = Song;
