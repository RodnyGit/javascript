var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
	nombre: {
		type: String,
		required: true
	},
	edad: {
		type: Number,
		required: true
	},
	sexo: {
		type: String,
		required: true
	},
	oficio: {
		type: String,
		required: true
	},
	nacionalidad: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("usuario", usuarioSchema);
