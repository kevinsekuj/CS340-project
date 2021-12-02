const connection = require("../utils/dbcon");

const Label = {
  readAll: async () => {
    const con = await connection();

    const query = `SELECT labelID, labelName, DATE_FORMAT(dateFounded, '%M %d, %Y') AS dateFounded from LABELS;`;
    const [rows, fields] = await con.execute(query);

    await con.end();

    return rows;
  },

  create: async (data) => {
    const con = await connection();
    const { labelName, dateFounded } = data;

    const query = `
      INSERT INTO LABELS (labelName, dateFounded)
      VALUES ('${labelName}', '${dateFounded}');
      `;

    const [rows] = await con.execute(query);
    await con.end();

    const { insertId } = rows;
    return insertId;
  },
};

module.exports = Label;
