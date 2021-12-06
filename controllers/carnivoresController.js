const carnivoreData = require('../Models/Carnivores');


module.exports = {

    getCarnivores: async(req, res) => {
        try {
            const allCarnivores = await carnivoreData.find({});
            res.status(200).json({
                msg: 'Lista de carnívoros',
                body: allCarnivores
            })
        } catch (err) {
            res.status(400).json({
                msg: 'Carnívoros no encontrados'
            })
        }
        return res;
    },
    getCarnivore: async(req, res) => {
        try {
            const { params: { id } } = req;
            const carnivore = await carnivoreData.findOne({ _id: Object(id) });
            res.status(200).json({
                msg: 'Carnivoro encontrado',
                body: carnivore
            })
        } catch (err) {
            res.status(400).json({
                msg: 'Carnivoro no encontrado'
            })

        }
        return res;
    },
    createCarnivore: async(req, res) => {
        try {
            const { body: newCarnivore } = req;
            const animal = new carnivoreData(newCarnivore);
            const carnivoreNew = await animal.save();
            res.status(200).json({
                msg: 'Carnívoro creado',
                body: carnivoreNew
            })
        } catch (err) {
            res.status(400).json({
                msg: 'Carnívoro no creado',
            })
        }
        return res;
    },
    updateCarnivore: async(req, res) => {
        try {
            const { params: { id }, body: animalU } = req;
            const carnivoreUpdate = await carnivoreData.findOne({ _id: Object(id) });
            carnivoreUpdate.nombre = animalU.nombre;
            carnivoreUpdate.especie = animalU.especie;
            carnivoreUpdate.dieta = animalU.dieta;
            carnivoreUpdate.colmillos = animalU.colmillos;
            carnivoreUpdate.altura = animalU.altura;
            await carnivoreUpdate.save();
            res.status(200).json({
                msg: 'Carnívoro actualizado',
                body: carnivoreUpdate
            })
        } catch (err) {
            res.status(400).json({
                msg: 'Carnívoro no actualizado',
            })

        }
        return res;
    },
    deleteCarnivore: async(req, res) => {
        try {
            const { params: { id } } = req;
            const deleteCarnivore = await carnivoreData.findOne({ _id: Object(id) });
            const carnivoreDeleted = await deleteCarnivore.remove();
            res.status(200).json({
                msg: 'Carnívoro eliminado',
                body: carnivoreDeleted
            })
        } catch (err) {
            res.status(400).json({
                msg: 'Carnívoro no se pudo eliminar',
            })
        }
        return res;
    }

}