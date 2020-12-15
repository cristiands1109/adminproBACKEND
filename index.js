const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config')


// Crear el servidor express
const app = express();

// configurar cors
app.use(cors());

// Base de datos
dbConnection();




// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola ruta slash'
    })
});




// Listen to server 
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto: '+ process.env.PORT);
});