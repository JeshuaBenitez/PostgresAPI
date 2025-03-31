const { Router } = require('express');
const controllers = require('../controllers');  // Ruta correcta a controllers

const router = Router();

// Ruta POST para crear un nuevo usuario
router.post('/users', controllers.createUser);

// Ruta GET para obtener todos los usuarios
router.get('/users', controllers.getAllUsers);

module.exports = router;
