/*
  The Label model is exported to the LabelController.
  Label model is where all database interaction occurs for the Label table.
*/

const connection = require("../utils/dbcon");

const Label = {

  // READ ALL labels
  readAll: async () => {
    const con = await connection();

    const query = `SELECT labelID, labelName, DATE_FORMAT(dateFounded, '%M %d, %Y') AS dateFounded from LABELS;`;
    const [rows] = await con.execute(query);

    await con.end();
    return rows;
  },

  // CREATE NEW label
  create: async (labelData) => {
    const con = await connection();
    const { labelName, dateFounded } = labelData;

    const query = `
      INSERT INTO LABELS (labelName, dateFounded)
      VALUES ('${labelName}', '${dateFounded}');
      `;
    const [rows] = await con.execute(query);
    const { insertId } = rows;

    await con.end();
    return insertId;
  },
};

module.exports = Label;
