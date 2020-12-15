import { Router } from 'express';
import { merchanController } from '../controllers/merchan.controller';
import { checkJwt } from '../middlewares/checkJwt';


class MerchanRouter {

    public router: Router = Router();

    constructor() {
        this.router.get('/merchan', merchanController.index);        // esta filtra por organizador
        this.router.post('/',checkJwt('Admin'), merchanController.create);
        this.router.put('/:id', merchanController.update);
        this.router.delete('/', merchanController.destroy);

    }
}
    
export const MerchanRoutes = new MerchanRouter();
