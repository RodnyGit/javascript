var express = require('express');
var router = express.Router();
var playerController = require('../controllers/playerController');

router.get('/player', playerController.listar);
router.post('/player', playerController.agregar);
router.get('/player/:id', playerController.obtenerById);
router.put('/player/:id', playerController.actualizar);
router.delete('/player/:id', playerController.eliminar);
router.post('/notificarEvento', playerController.notificarEvento);

module.exports = router;
