const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

//setings
app.set('port', process.env.PORT || 3000);
app.use(cors());
//archivos estaticos
//console.log(__dirname);
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
