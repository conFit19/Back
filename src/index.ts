 import  express from 'express';
 
import { eventRoutes } from './routes/events.routes';
import { registroRoutes } from './routes/registro.routes';
 const cors = require('cors');

//  var express = require('express')

const app = express();
// Setting the port of aplication server
app.set('port', 3000);

app.use(cors());
app.use(express.json());

// rutas
app.use('/registro', registroRoutes.router);
app.use('/eventos', eventRoutes.router);

 
// Start the server, using the port defined
const server = app.listen(app.get('port'), () => {

    console.log(`Ther server is running on port ${app.get('port')}`); 
});


