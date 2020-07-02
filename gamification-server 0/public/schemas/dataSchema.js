var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peticionSchema = new Schema({
	nombre: {
		type: String,
		required: true
	},
	params: {
		type: Array,
		required: true
	},
	nivel: {
		type: String,
		required: true
	},
	// paramList: {
	// 	type: Array,
	// 	required: true
	// }
});

module.exports = mongoose.model('peticion', peticionSchema);
