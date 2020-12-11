import { Request, Response } from 'express';
import { Merchan } from '../models/merchan.model';
import { Users } from '../models/user.model';
import {Compra} from '../models/compras.model'

class ComprasController {
    
    public async index (req: Request, res: Response) {

        try{
            const compra = await Compra.findAll({
                include: [
                    {model: Users},
                    {model: Merchan}
                ],
                nest: true
            });
            res.json(compra);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }

     public async newCompra (req: Request, res: Response){
         try{

            const params = req.body;
             const result = await Compra.create(params);
             res.json(result);

         }catch (error){
             console.log(error);
        }
     }
     public async userCompras (req: Request, res: Response) {

        try{
            const registro = await Compra.findAll({
                where: { UserId: req.body.UserId },
                include: [
                    {model: Merchan}
                ],
                nest: true
            });
            res.json(registro);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }
    public async deleteCompra (req: Request, res: Response) {
        
        try{
            const result = await Compra.destroy({
                where:{
                    id: req.params.id
                }
            })
            res.send('compra eliminada');
        }catch (error) {

        }
    }
    
}

export const comprasController = new ComprasController();