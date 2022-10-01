require('dotenv').config();
const { Sequelize } = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize(process.env.DB_LINK, {
  logging: false,
  native: false,
  dialectModule: pg
});

module.exports = sequelize;
