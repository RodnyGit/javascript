var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.sendFile('D:/javascript/vue/vueApp1/public/componentes/home/home.html');
});
app.get('/clase1', function (req, res) {
	res.sendFile('D:/javascript/vue/vueApp1/public/componentes/home/clase1.html');
});
app.get('/clase2', function (req, res) {
	res.sendFile('D:/javascript/vue/vueApp1/public/componentes/home/clase2.html');
});
app.get('/clase3', function (req, res) {
	res.sendFile('D:/javascript/vue/vueApp1/public/componentes/home/clase3.html');
});
app.get('/clase4', function (req, res) {
	res.sendFile('D:/javascript/vue/vueApp1/public/componentes/home/clase4.html');
});
module.exports = app;
