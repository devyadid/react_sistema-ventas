const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const md5 = require('md5');

const User = sequelize.define('User', {
  idusuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  clave: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hashedPassword = md5(value);
      console.log('Original Password:', value); // Añade esta línea
      console.log('Hashed Password:', hashedPassword); // Agrega este console.log
      this.setDataValue('clave', hashedPassword);
    }
  },
  rol: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'usuario', // Especifica el nombre de la tabla
  timestamps: false // Si no estás utilizando campos de marca de tiempo
});

module.exports = User;
