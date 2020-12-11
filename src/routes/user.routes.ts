import { Router } from 'express';
import { userController } from '../controllers/user.controller';

class UserRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', userController.index);
        this.router.get('/:id', userController.userProfile);
        this.router.post('/', userController.create);
        this.router.put('/:id', userController.update);
        this.router.delete('/', userController.destroy);
}
    }
    
export const userRoutes = new UserRoutes();