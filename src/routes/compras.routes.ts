import { Router } from 'express';
import { comprasController } from '../controllers/compras.controller';
import { checkJwt } from '../middlewares/checkJwt';

class CompraRoutes {

    public router: Router = Router();

    // checkJwt('Admin') añadir 
    constructor() {
        this.router.get('/', comprasController.index);
        this.router.post('/',comprasController.newCompra);
        this.router.get('/users',comprasController.userCompras);
        this.router.delete('/:id',comprasController.deleteCompra)
       
    }
}
    
export const comprasRoutes = new CompraRoutes();
