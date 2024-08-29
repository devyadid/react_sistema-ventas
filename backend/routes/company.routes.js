const express = require('express');
const router = express.Router();
const Company = require('../models/company.model');

// Obtener los datos de la empresa
router.get('/company', async (req, res) => {
    try {
        const company = await Company.findOne({ where: { id: 1 } });
        res.json(company);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los datos de la empresa' });
    }
});

// Actualizar los datos de la empresa
router.post('/company', async (req, res) => {
    const { dni, nombre, razon_social, telefono, email, direccion, igv } = req.body;
    try {
        await Company.update(
            { dni, nombre, razon_social, telefono, email, direccion, igv },
            { where: { id: 1 } }
        );
        res.json({ message: 'Datos actualizados correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al actualizar los datos de la empresa' });
    }
});

module.exports = router;
