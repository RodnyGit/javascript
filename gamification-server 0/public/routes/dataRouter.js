var express = require('express');
var router = express.Router();
var dataController = require('../controllers/dataController');

router.get('/data', dataController.listar);
router.post('/data', dataController.agregar);
router.get('/data/:id', dataController.obtenerById);
router.put('/data/:id', dataController.actualizar);
router.delete('/data/:id', dataController.eliminar);

module.exports = router;
