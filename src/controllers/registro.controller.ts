import { Request, Response } from 'express';
import { Events } from '../models/events.model';
import { Registro } from '../models/registro.model';
import { Users } from '../models/user.model';

class RegistroController {
    
    public async index (req: Request, res: Response) {

        try{
            const registro = await Registro.findAll({
                include: [
                    {model: Users},
                    {model: Events}
                ],
                nest: true
            });
            res.json(registro);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }

    public async userEvents (req: Request, res: Response) {

        try{
            const registro = await Registro.findAll({
                where: {
                    UserId: req.params.id
                },
                include: [
                    {model: Users},
                    {model: Events}
                ],
                nest: true,

            });
            res.json(registro);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }
}

export const registroController = new RegistroController();