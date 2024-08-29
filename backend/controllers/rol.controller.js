const Rol = require('../models/rol.model');

const getRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los roles' });
  }
};

const getRoleById = async (req, res) => {
  const { idrol } = req.params; // Cambiado de 'id' a 'idrol'
  try {
    const role = await Rol.findByPk(idrol); // Cambiado de 'id' a 'idrol'
    if (!role) {
      return res.status(404).json({ error: 'Rol no encontrado' });
    }
    res.json({ rol: role.rol }); // Devuelve solo el nombre del rol
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el rol' });
  }
};

module.exports = {
  getRoles,
  getRoleById,
};
