const { Schema, model } = require('mongoose');

const herbivorosSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    caracteristicas: {
        type: String,
        required: false
    },
    edad: {
        type: Number,
        required: true
    }
});

module.exports = model('herbivoro', herbivorosSchema);