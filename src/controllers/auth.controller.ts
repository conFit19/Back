import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config.json';
import { Users } from '../models/user.model';

 
class AuthController {

    public async auth (req: Request, res: Response) {      
        try{

            const findUser = await Users.findOne({
                where:{
                    email: req.body.email,
                }
               
            })
            if(findUser){
                const token = jwt.sign(
                    {
                        email: req.body.email
                    },
                    config.jwtSecret,
                    {
                    expiresIn: '1h'
                    }
                ); 
                res.send(token); 
            }else{
                res.json('Error: 404. User not found.')
            } 
           
        }catch (error) {

                // res.sendStatus(404)
                // res.json(404)
                res.send(error)
        }
    }
}

export const authController = new AuthController();
