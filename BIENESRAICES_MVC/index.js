// const express = require('express');    commonjs

import express from 'express';  // Module
import usuarioRoutes from './routes/usuarioRoutes.js'; // Requiere la extención

const app = express();

// Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');


// Carpeta Pública
app.use( express.static('public') );


// Routing
app.use('/auth', usuarioRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
});