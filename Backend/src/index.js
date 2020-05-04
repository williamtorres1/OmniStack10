const express = require('express');	

const mongoose = require('mongoose');	
const mongodbApiKey = require('../credentials/mongoDB.json').ApiKey;	
const routes = require('./routes');	
const cors = require('cors');	
const http = require('http');	
const { setupWebSocket } = require('./websocket.js');	
const app = express();	

const server = http.Server(app);	

setupWebSocket(server);	
mongoose.connect(mongodbApiKey,	
    {useNewUrlParser: true,	
    useUnifiedTopology: true,	
});	
app.use(cors());	
app.use(express.json());	
app.use(routes);	


server.listen(3333);	
// Métodos HTTP: GET, PUT, POST, DELETE	


// Tipos de Parâmetros:	

// Query Params: request.query (Filtros, ordenação, paginação, ...) 	
// Route Params: request.params (Identificar um recurso na alteração ou remoção)	
// Body: request.body (Dados para criação ou alteração de um registro)	

// MongoDB (Banco de dados não-relacional)	


