const { DataTypes } = require('sequelize');
const sequelize = require('../db.js')

const Activities = require('./Activities.js')

const Country = sequelize.define('country', { 
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
});

Country.belongsToMany(Activities, {
  through: 'country_act',
  targetKey: 'id'
})

Activities.belongsToMany(Country, {
  through: 'country_act'
})



module.exports = Country;