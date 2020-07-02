var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var campagnaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    instanciaId: {
        type: String,
        required: true
    },
    reglaId: {
        type: String,
        required: true
    },
    config: {
        type: Object,
        required: false
    }
});

module.exports = mongoose.model('campagna', campagnaSchema);
