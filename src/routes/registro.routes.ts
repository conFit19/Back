import { Router } from 'express';
import { registroController } from '../controllers/registro.controller';

class RegistroRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', registroController.index);
        this.router.get('/:id', registroController.userEvents);
    }
}
    
export const registroRoutes = new RegistroRoutes();
