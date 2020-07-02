var express = require('express');
var router = express.Router();
var reglasController = require('../controllers/reglasController');

router.get('/reglas', reglasController.listar);
router.post('/reglas', reglasController.agregar);
router.get('/reglas/:id', reglasController.obtenerById);
router.put('/reglas/:id', reglasController.actualizar);
router.delete('/reglas/:id', reglasController.eliminar);

module.exports = router;


