import { Request, Response } from 'express';
import { Merchan } from '../models/merchan.model';

class MerchanController {
    
    public async index (req: Request, res: Response) {

        try{
            const merchan = await Merchan.findAll({
                raw: true
            });
            res.json(merchan);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }
    public async create (req: Request, res: Response) {

        try{

        const params = req.body;
        const result = await Merchan.create(params);
        res.json(result);

        }
        catch (error) {

            res.json(error)

        }
    }
    public async update (req: Request, res: Response) {

        try{

            const user = await Merchan.update(
                {
                    
                    product: req.body.product
                    
                },
                { where: { id: req.params.id }
            });
            //const newAuthor = await Users.findByPk(req.params.id, { raw: true });
            //res.send(newAuthor);
            res.send('producto actualizado')
        }
        catch (error){

            res.send(error);

        }

}
    public async destroy (req: Request, res: Response) {

    try{

        const result = await Merchan.destroy({
            where: {
                product: req.body.product
            }
        })
        res.send('producto eliminado');

    }
    catch(error){

        res.json(error);

    }
}
}

export const merchanController = new MerchanController();