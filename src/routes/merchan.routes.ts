import { Router } from 'express';
import { merchanController } from '../controllers/merchan.controller';
import { checkJwt } from '../middlewares/checkJwt';


class MerchanRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', merchanController.index);
        this.router.post('/',checkJwt('Admin'), merchanController.create);
        this.router.put('/:id', merchanController.update);
        this.router.delete('/', merchanController.destroy);
}
    }
    
export const merchanRoutes = new MerchanRoutes();