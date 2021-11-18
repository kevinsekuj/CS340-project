const connection = require("../utils/dbcon");

const Search = {
  find: async () => {
    const con = await connection();

    const query = `SELECT * FROM artists WHERE artistName LIKE '%ika%';`;
    const [rows] = await con.execute(query);
    console.log(rows);

    await con.end();

    return rows;
  },
};

module.exports = Search;
