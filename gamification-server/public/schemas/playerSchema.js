var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
	nombre: {
		type: String,
		required: true
	},
	pwstId: {
		type: String,
		required: true
	},
	instanciaId: {
		type: String,
		required: true
	},
	data: {
		type: Object,
		required: false
	},
	score: {
		type: Object,
		required: false
	}
});

module.exports = mongoose.model('player', playerSchema);
