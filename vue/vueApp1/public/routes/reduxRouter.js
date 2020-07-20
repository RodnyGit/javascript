var express = require('express');
var router = express.Router();
var reduxController = require('../controllers/reduxController');

router.get('/getState', reduxController.getState);
router.post('/distpatch', reduxController.distpatch);
router.post('/subscribe', reduxController.subscribe);

module.exports = router;
