const { DataTypes, Op } = require('sequelize');
const sequelize = require('../db.js')

const Activities = sequelize.define('activities', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dificulty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      [Op.between]: [1, 5]
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Fall', 'Winter', 'Spring'),
      allowNull: true,
    }
});

module.exports = Activities;

