import { Request, Response } from 'express';
import { Events } from '../models/events.model';

class EventsController {
    
    public async allEvents (req: Request, res: Response) {

        try{
            const allEvents = await Events.findAll({ raw: true});
            res.json(allEvents);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }
    public async myEvents (req: Request, res: Response) {

        try{
            const myEvents = await Events.findAll({ 
                where: { UserId: req.params.UserId },
                raw: true});
            res.json(myEvents);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }

    public async onlineEvents(req:Request,res:Response){
        try{
            const online = await Events.findAll({ where: { place: "Online" }});
            res.json(online);
            
        }
        catch(error){
            console.log(error);
            res.sendStatus(500)
        }
    }
    public async presencialEvents(req:Request,res:Response){
        try{
            const presencial = await Events.findAll({ where: { place:["Madrid","Barcelona","Valencia"]}});
            res.json(presencial);
            
        }
        catch(error){
            console.log(error);
            res.sendStatus(500)
        }
    }

    public async createEvent (req: Request, res: Response) {
        
        try{
            const request = req.body;
            const newEvent = await Events.create(request);
            res.json(newEvent);

        }catch (error) {
            res.sendStatus(500).json(error)
        }
    }
    
    public async deleteEvent (req: Request, res: Response) {
        
        try{
            const result = await Events.destroy({
                where:{
                    id: req.params.id
                }
            })
            res.send('evento eliminado');
        }catch (error) {

        }
    }

    public async updateEvent (req: Request, res: Response) {

        try{
            const result = await Events.update(
                {
                    name: req.body.name,
                    description: req.body.description,
                    place: req.body.place,
                    capacity: req.body.capacity,
                    time: req.body.time,
                    duration: req.body.duration,
                    type: req.body.type,
                    day: req.body.day,
                    organizer: req.body.organizer,
                    age: req.body.age

                }, 
                {where: {id: req.params.id}}
            );
            res.send('evento actualizado')
        }catch (error) {
            res.json(error);
        }
    }

    public async detailEvent(req:Request,res:Response){
        try{
            const detail = await Events.findAll({ where: { id: req.params.id }});
            res.json(detail);
            
        }
        catch(error){
            console.log(error);
            res.sendStatus(500)
        }
    }


}

export const eventsController = new EventsController();