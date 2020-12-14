import  express from 'express';

// routers
import { authRoutes } from './routes/auth.routes';
import { eventRoutes } from './routes/events.routes';
import { registroRoutes } from './routes/registro.routes';
import { userRoutes } from './routes/user.routes';
import { merchanRoutes } from './routes/merchan.routes';

// models
import { Users } from './models/user.model';


import multer from 'multer';
import path from 'path';
import { comprasController } from './controllers/compras.controller';
import { comprasRoutes } from './routes/compras.routes';

// Configuración de guardado que multer debe aplicar al ponerlo en uso
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'public/uploads'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.originalname);
    }
})

// Inicializamos multer, con la configuración de guardado previamente definida.
const upload = multer({ storage: storage});

 const cors = require('cors');

//  var express = require('express')

const app = express();
// Setting the port of aplication server
app.set('port', 3000);

// lo que hay dentro de public es el contenido al que podemos acceder desde localhost:3000
app.use(express.static(__dirname + '/public'));



app.use(cors());
app.use(express.json());

// rutas
app.use('/registro', registroRoutes.router);
app.use('/user', userRoutes.router);
app.use('/merchan', merchanRoutes.router);
app.use('/eventos', eventRoutes.router);
app.use('/auth', authRoutes.router);
app.use('/compras',comprasRoutes.router)


app.post('/single-upload/:email', upload.single('file'), async (req, res) => {
    try{
        let photo = req.file;
       
            const addPhoto = await Users.update(
                {
                    profilePicture: `${photo.filename}`
                },
                { where: { email: req.params.email }
            });
        
        res.send(req.file);
    }catch(err){
        res.sendStatus(400) // Bad request
    }
});

 
// Start the server, using the port defined
const server = app.listen(app.get('port'), () => {

    console.log(`Ther server is running on port ${app.get('port')}`); 
});


