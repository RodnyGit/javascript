//modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

//app resources
const routes = require('./public/routes/routes');
const { url } = require('./public/config/dataBase');

//Mi Redux
const reducer = require('./public/redux/reducer.js');
const createStore = require('./public/redux/redux.js');
const store = createStore(reducer);

app.use((req, res, next) => {
	res.state = store;
	next();
});

//DB Connecion
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if (err) {
		console.log(err);
	}
	console.log('conectado a MongoDB');
});

//archivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

//settings
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3999);

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(routes);

//starting server
const server = app.listen(app.get('port'), () => {
	console.log('Server en ' + app.get('port'));
});

