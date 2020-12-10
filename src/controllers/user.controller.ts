import { Request, Response } from 'express';
import { Users } from '../models/user.model';

class UsersController {
    
    public async index (req: Request, res: Response) {

        try{
            const user = await Users.findAll({
                raw: true
            });
            res.json(user);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }
    public async create (req: Request, res: Response) {

        try{

            const params = req.body;
            const result = await Users.create(params);
            res.json(result);

        }
        catch (error) {

            res.json(error)

        }
    }
    public async update (req: Request, res: Response) {

        try{

            const user = await Users.update(
                {
                    name: req.body.name
                },
                { where: { id: req.params.id }
            });
            //const newAuthor = await Users.findByPk(req.params.id, { raw: true });
            //res.send(newAuthor);
            res.send('nombre actualizado')
        }
        catch (error){

            res.send(error);

        }

}
    public async destroy (req: Request, res: Response) {

    try{

        const result = await Users.destroy({
            where: {
                name: req.body.name
            }
        })
        res.send('usuario eliminado');

    }
    catch(error){

        res.json(error);

    }
}
}

export const userController = new UsersController();