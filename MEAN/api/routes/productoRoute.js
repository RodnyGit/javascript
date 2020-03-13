var express = require('express');
var router = express.Router();
var productoController = require('../controllers/productoController');

router.get('/producto/', productoController.listar);
router.post('/producto/', productoController.agregar);
router.get('/producto/:id', productoController.obtener);
router.put('/producto/:id', productoController.actualizar);
router.delete('/producto/:id', productoController.eliminar);

module.exports = router;
