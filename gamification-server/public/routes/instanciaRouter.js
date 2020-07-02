var express = require('express');
var router = express.Router();
var instanciaController = require('../controllers/instanciaController');

router.get('/instancia', instanciaController.listar);
router.post('/instancia', instanciaController.agregar);
router.get('/instancia/:id', instanciaController.obtenerById);
router.put('/instancia/:id', instanciaController.actualizar);
router.delete('/instancia/:id', instanciaController.eliminar);

module.exports = router;
