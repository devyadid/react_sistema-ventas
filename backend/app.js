const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const rolRoutes = require('./routes/rol.routes'); // Importar las rutas de roles
const companyRoutes = require('./routes/company.routes'); // Importar las rutas de la compañía

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', rolRoutes); // Usar las rutas de roles
app.use('/api', companyRoutes); // Usar las rutas de la compañía

module.exports = app;
