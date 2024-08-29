const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Rol = sequelize.define('Rol', {
  idrol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'rol',
  timestamps: false,
});

module.exports = Rol;
