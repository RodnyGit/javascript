var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController');
var reduxController = require('../controllers/reduxController');

router.get('/usuario', usuarioController.listar);
router.post('/usuario', usuarioController.agregar);
router.get('/usuario/:id', usuarioController.obtenerById);
router.put('/usuario/:id', usuarioController.actualizar);
router.delete('/usuario/:id', usuarioController.eliminar);
router.post('/login', usuarioController.login);



module.exports = router;
