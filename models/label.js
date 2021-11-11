const Joi = require('joi');
const connection = require('../utils/dbcon');

const Label = {
  validateLabel: () => {},

  readAll: async () => {
    const con = await connection();

    const query = `SELECT * from LABELS;`;
    const [rows, fields] = await con.execute(query);

    await con.end();

    return rows;
  },

  readFromId: () => {},

  create: () => {},

  update: () => {},

  delete: () => {},
};

module.exports = Label;
