import { Router } from 'express';
import { registroController } from '../controllers/registro.controller';

class RegistroRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', registroController.registro);
}
    }
    
export const registroRoutes = new RegistroRoutes();
