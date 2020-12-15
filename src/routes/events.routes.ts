import { Router } from 'express';
import { eventsController } from '../controllers/events.controller';


import { checkJwt } from '../middlewares/checkJwt';


class EventRouter {

    public router: Router = Router();

    constructor() {
        this.router.get('/', eventsController.allEvents);
        // esta filtra por organizador
        this.router.get('/myEvents/:UserId', eventsController.myEvents);
        this.router.post('/', eventsController.createEvent);
        this.router.delete('/:id',checkJwt('Admin'), eventsController.deleteEvent);
        this.router.put('/:id',checkJwt('Admin'), eventsController.updateEvent);
        this.router.get('/online',eventsController.onlineEvents);
        this.router.get('/presencial',eventsController.presencialEvents);
        this.router.get('/detailevent/:id',eventsController.detailEvent)


    }
}
    
export const eventRoutes = new EventRouter();
