require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_LINK,
} = process.env;


const sequelize = new Sequelize(DB_LINK, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});



module.exports = sequelize;
