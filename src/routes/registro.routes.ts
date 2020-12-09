import { Router } from 'express';
import { registroController } from '../controllers/registro.controller';
import { checkJwt } from '../middlewares/checkJwt';

class RegistroRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/',checkJwt('Admin'), registroController.index);
    }
}
    
export const registroRoutes = new RegistroRoutes();
