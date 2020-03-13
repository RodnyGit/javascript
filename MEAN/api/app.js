//Configuramos los modulos que usaremos
require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/indexRoute');
const app = express();

//Inicializaciones
app.use(cors());
app.use(express.json());

//Configuramos el router
app.use(routes);

//DB Connection
mongoose.connect('mongodb://localhost/MEAN', (err) => {
	if (err) {
		console.log(err);
	}
	console.log('conectado a MongoDB');
});


//Configuramos puerto de escucha del servidor
app.listen(process.env.PORT, () => {
	console.log('Escuchando por el 3001..!!');
});

//Configuramos el parser de los json
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
