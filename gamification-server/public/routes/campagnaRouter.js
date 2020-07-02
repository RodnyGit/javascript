var express = require('express');
var router = express.Router();
var campagnaController = require('../controllers/campagnaController');

router.get('/campagna', campagnaController.listar);
router.post('/campagna', campagnaController.agregar);
router.get('/campagna/:id', campagnaController.obtenerById);
router.put('/campagna/:id', campagnaController.actualizar);
router.delete('/campagna/:id', campagnaController.eliminar);

module.exports = router;


