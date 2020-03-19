var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.render('login');
});
app.get('/chat', (req, res) => {
	res.render('chat');
});
app.get('/createUser', (req, res) => {
	res.render('createUser');
});

app.use(require('./usuarioRoute'));

module.exports = app;
