var express = require('express');
var router = express.Router();
var mixerController = require('../controllers/mixerController');

router.get('/calcular', mixerController.calcular);

module.exports = router;
