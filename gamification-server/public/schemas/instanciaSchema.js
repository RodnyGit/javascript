var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var instanciaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    instanciaId: {
        type: String,
        required: true
    },
    adminGroupName: {
        type: String,
        required: true
    },
    campagnas: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('instancia', instanciaSchema);
