var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.render('login');
});
app.get('/adminPage', (req, res) => {
	if (req.session.user_id) {
		res.render('adminPage');
	}
	else res.render('login');
});
app.get('/instancias', (req, res) => {
	if (req.session.user_id) {
		res.render('instancias');
	}
	else res.render('login');
});
app.get('/campagnas', (req, res) => {
	if (req.session.user_id) {
		res.render('campagnas');
	} else res.render('login');
});
app.get('/reglas', (req, res) => {
	if (req.session.user_id) {
		res.render('reglas');
	} else res.render('login');
});

app.use(require('./loginRouter'));
app.use(require('./playerRouter'));
app.use(require('./reglaRouter'));
app.use(require('./instanciaRouter'));
app.use(require('./campagnaRouter'));
app.use(require('./reduxRouter'));


module.exports = app;


