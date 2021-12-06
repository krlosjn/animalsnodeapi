const { findOne } = require('../Models/Herbivores');
const animalData = require('../Models/Herbivores');

module.exports = {

    getHerbivores: async(req, res) => {
        try {
            const allData = await animalData.find({});
            res.status(200).json({
                msg: 'Lista de animales hervíboros',
                body: allData
            });
        } catch (err) {
            res.status(400).json({
                msg: 'Problema al consultar los animales hervíboros',
            });
        }
        return res;
    },
    getHervibore: async(req, res) => {
        try {
            const { params: { id } } = req;
            const animalFound = await animalData.findOne({ _id: Object(id) });
            res.status(200).json({
                msg: 'Animal encontrado',
                body: animalFound
            })

        } catch (err) {
            res.status(400).json({
                msg: 'Animal no encontrado',
            })
        }
        return res;
    },
    createHervibore: async(req, res) => {
        try {
            const { body: newAnimal } = req;
            const newHervibore = new animalData(newAnimal);
            const herviboreToInsert = await newHervibore.save();
            res.status(201).json({
                msg: 'Animal insertado con éxito',
                body: herviboreToInsert
            })

        } catch (err) {
            res.status(400).json({
                msg: 'Animal no  insertado'
            })
        }
        return res;
    },
    updateHerbivore: async(req, res) => {
        try {
            const { params: { id } } = req;
            const { body: updaterAnimal } = req;
            const updateHervibore = await animalData.findOne({ _id: Object(id) });
            updateHervibore.nombre = updaterAnimal.nombre;
            updateHervibore.especie = updaterAnimal.especie;
            updateHervibore.caracteristicas = updaterAnimal.caracteristicas;
            await updateHervibore.save();
            res.status(200).json({
                msg: 'Usuario actualizado',
                body: updateHervibore
            });
        } catch (err) {
            res.status(400).json({
                msg: 'Error actualizando usuario',
            });
        }
        return res;
    },
    deleteHervibore: async(req, res) => {
        try {
            const { params: { id } } = req;
            const deleteAnimal = await animalData.findOne({ _id: Object(id) });
            const animalDeleted = await deleteAnimal.remove();
            res.status(200).json({
                msg: 'Animal eliminado',
                body: animalDeleted
            })
        } catch (errr) {
            res.status(400).json({
                msg: 'Animal no se ha podido  eliminar',
            })
        }
        return res;
    }
}