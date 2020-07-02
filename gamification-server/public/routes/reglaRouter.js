var express = require('express');
var router = express.Router();
var reglaController = require('../controllers/reglaController');

router.get('/regla', reglaController.listar);
router.post('/regla', reglaController.agregar);
router.get('/regla/:id', reglaController.obtenerById);
router.put('/regla/:id', reglaController.actualizar);
router.delete('/regla/:id', reglaController.eliminar);

module.exports = router;


