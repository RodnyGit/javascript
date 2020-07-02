var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.render('Home');
});

app.use(require('./dataRouter'));
app.use(require('./reglasRouter'));
app.use(require('./mixerRouter'));

module.exports = app;


