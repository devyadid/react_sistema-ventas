const User = require('../models/user.model');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nombre, correo, usuario, clave, rol } = req.body;
  try {
    const newUser = await User.create({
      nombre,
      correo,
      usuario,
      clave, // Pasar la contraseña sin hash
      rol
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { usuario, clave } = req.body;
  try {
    const user = await User.findOne({ where: { usuario } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    // Compara la contraseña hasheada almacenada con el hash de la contraseña ingresada
    const hashedPassword = md5(clave);
    const isMatch = user.clave === hashedPassword;
    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }
    const token = jwt.sign({ id: user.idusuario, rol: user.rol }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
