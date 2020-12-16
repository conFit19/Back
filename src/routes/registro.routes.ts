import { Router } from 'express';
import { registroController } from '../controllers/registro.controller';
import { checkJwt } from '../middlewares/checkJwt';

class RegistroRoutes {

    public router: Router = Router();

    // checkJwt('Admin') añadir 
    constructor() {
        this.router.get('/', registroController.index);
        // eventos a los que el usuario está apuntado
        this.router.get('/userEvents/:UserId', registroController.userEvents);
        this.router.post('/', registroController.newRegister);
        this.router.delete('/', registroController.deleteRegister);
    }
}
    
export const registroRoutes = new RegistroRoutes();
