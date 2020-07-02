var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reglaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    nivel: {
        type: String,
        required: true
    },
    paramList: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('reglas', reglaSchema);
