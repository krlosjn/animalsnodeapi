const { Schema, model } = require('mongoose');

const CarnivoresSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: false
    },
    dieta: {
        type: String,
        required: true
    },
    colmillos: {
        type: Number,
        required: true
    },
    altura: {
        type: Number,
        required: false
    }
});

module.exports = model('carnivoro', CarnivoresSchema);