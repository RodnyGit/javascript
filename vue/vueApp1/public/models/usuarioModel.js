var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
	nombre: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	pwstId: {
		type: String,
		required: true
	},
	grupo: {
		type: Array,
		required: true
	},
	tipo: {
		type: String,
		required: true
	},

});

module.exports = mongoose.model('usuario', usuarioSchema);
