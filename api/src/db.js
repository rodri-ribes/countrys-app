require('dotenv').config();
const { Sequelize } = require('sequelize');
const pg = require('ng');

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_LINK,
} = process.env;


const sequelize = new Sequelize(DB_LINK, {
  logging: false,
  dialectModule: pg
});



module.exports = sequelize;
