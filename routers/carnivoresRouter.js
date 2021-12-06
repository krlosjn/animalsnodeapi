const express = require('express');
const carnivoreController = require('../controllers/carnivoresController');

const routes = (app) => {
    let routerC = express.Router();
    routerC.get('/', carnivoreController.getCarnivores)
        .get('/:id', carnivoreController.getCarnivore)
        .post('/', carnivoreController.createCarnivore)
        .put('/:id', carnivoreController.updateCarnivore)
        .delete('/:id', carnivoreController.deleteCarnivore)
    app.use('/carnivores', routerC);
}
module.exports = routes;