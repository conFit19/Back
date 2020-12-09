import { Router } from 'express';
import { eventsController } from '../controllers/events.controller';

class EventRouter {

    public router: Router = Router();

    constructor() {
        this.router.get('/', eventsController.allEvents);
        this.router.post('/', eventsController.createEvent);
        this.router.delete('/:id', eventsController.deleteEvent);
        this.router.put('/:id', eventsController.updateEvent);
    }
}
    
export const eventRoutes = new EventRouter();
