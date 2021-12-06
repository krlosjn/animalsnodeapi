const mongoose = require('mongoose');
const dataBase = require('../config/config');

const connectionDB = async() => {
    let connectedDB = null;
    try {
        connectedDB = await mongoose.connect(dataBase.dbase);
        console.log('DB conectada exitosamente');
    } catch (err) {
        console.log('Conexión no se pudo establecer');
    }
    return connectedDB;
}
module.exports = connectionDB;