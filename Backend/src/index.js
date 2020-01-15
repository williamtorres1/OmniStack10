const express = require('express');

const mongoose = require('mongoose');
const mongodbApiKey = require('../credentials/mongoDB.json').ApiKey;
const routes = require('./routes');
const app = express();

mongoose.connect(mongodbApiKey,
    {useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
// Métodos HTTP: GET, PUT, POST, DELETE


// Tipos de Parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...) 
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Banco de dados não-relacional)



app.listen(3333);