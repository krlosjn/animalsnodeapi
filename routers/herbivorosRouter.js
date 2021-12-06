const express = require('express');
const herviboresController = require('../controllers/herviboresController');

const routes = (app) => {
    let router = express.Router();
    router.get('/', herviboresController.getHerbivores)
        .get('/:id', herviboresController.getHervibore)
        .post('/', herviboresController.createHervibore)
        .put('/:id', herviboresController.updateHerbivore)
        .delete('/:id', herviboresController.deleteHervibore)
    app.use('/herbivores', router);
}
module.exports = routes;