//modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');



//settings
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(cors());

//middlewares


//routes




//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));



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
