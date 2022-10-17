const express = require ('express');
const router = express.Router();  
const apiController = require('../controllers/apiController'); 
const path = require('path');

// Acceso a lista de productos
router.get('/products', apiController.products);

// Acceso al detalle del producto
router.get('/products/:id', apiController.detail);

// Acceso a la lista de usuarios
router.get('/users', apiController.users);

// Acceso al detalle del usuario
router.get('/users/:id', apiController.user);

module.exports = router; 