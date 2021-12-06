const express = require('express');
const database = require('./database/db');
const PORT = process.env.PORT || 8000;
const herbivores = require('./routers/herbivorosRouter');
const carnivores = require('./routers/carnivoresRouter');
const app = express();
app.use(express.json());
database();

herbivores(app);
carnivores(app);

app.listen(PORT, () => {
    console.log('Iniciando servidor en puerto ', PORT);
})