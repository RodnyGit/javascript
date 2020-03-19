//modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const routes = require('./public/routes/routes');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { url } = require('./public/config/dataBase');
const cors = require('cors');
const app = express();

//DB Connecion
mongoose.connect(url, (err) => {
	useMongoClient: true;
	if (err) {
		console.log(err);
	}
	console.log('conectado a MongoDB');
});

//settings
//archivos estaticos
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded());
app.use(routes);

//routes

//starting server
const server = app.listen(app.get('port'), () => {
	console.log('Server en ' + app.get('port'));
});

//creando e inicializando SocketIo
const SocketIo = require('socket.io');
const io = SocketIo.listen(server);

//websockets
io.on('connection', (socket) => {
	console.log('new conection ', socket.id);

	socket.on('chatMsj', (data) => {
		console.log(data);
		io.sockets.emit('chatMsjFromServ', data);
	});
	socket.on('tiping', (data) => {
		console.log(data);
		io.sockets.emit('tipingFromServ', data);
	});
});
