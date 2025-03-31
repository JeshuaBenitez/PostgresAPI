const cors = require('cors');
const express = require('express');
const routes = require('../routes');  // Ruta correcta al archivo routes/index.js

const server = express();

server.use(cors());  // Permite las solicitudes de otros orígenes
server.use(express.json());  // Para procesar solicitudes con JSON

// Usar las rutas definidas en /routes
server.use('/api', routes);  // Todas las rutas dentro de /api

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
});

module.exports = server;
