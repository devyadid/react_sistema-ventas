const express = require('express');
const { register, login, listUsers } = require('../controllers/user.controller');
const verifyToken = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', verifyToken, listUsers);

module.exports = router;
