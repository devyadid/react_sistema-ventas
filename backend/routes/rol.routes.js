const express = require('express');
const { getRoles, getRoleById } = require('../controllers/rol.controller');
const router = express.Router();

// Ruta para obtener todos los roles
router.get('/roles', getRoles);

// Ruta para obtener un rol por su id
router.get('/roles/:idrol', getRoleById);

module.exports = router;
