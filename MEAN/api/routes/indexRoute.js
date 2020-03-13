var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('Index..!');
});

app.use(require('./usuarioRoute'));
app.use(require('./productoRoute'));

module.exports = app;
