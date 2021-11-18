const connection = require("../utils/dbcon");

const Search = {
  find: async (userSearch) => {
    const con = await connection();

    const query = `SELECT * FROM artists WHERE artistName LIKE '%${userSearch}%';`;
    const [rows] = await con.execute(query);

    await con.end();

    return rows;
  },
};

module.exports = Search;
