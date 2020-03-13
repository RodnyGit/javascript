var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productoSchema = new Schema({
	nombre: {
		type: String,
		required: true
	},
	marca: {
		type: String,
		required: true
	},
	precio: {
		type: Number,
		required: true
	},
	distribuidor: {
		type: String,
		required: true
	},
	tipo: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Producto", productoSchema);
