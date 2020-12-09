import { Request, Response, NextFunction  } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config.json';
import { Users } from '../models/user.model';


export const checkJwt =  (roleToCheck: string) => {
    return async (req:Request, res: Response, next: NextFunction) => {
        const token = <string> req.headers["authorization"];

        try {
            // devuelve el objeto del token
           
                let decoded = jwt.verify(token, config.jwtSecret);
                let data = JSON.stringify(decoded);
                let data2 = JSON.parse(data);
                console.log(data2.email);
            
                 const admin = await Users.findAll({
                     where:{
                         email:data2.email
                }, raw: true});
                
                console.log(admin);
               
    
            if(admin[0].rol != roleToCheck){

                throw new Error("Dont have permmissions")
            //   res.send(404) 
            }
        
        } catch (error) {

            res.sendStatus(401);
        }
        next();
    }
}

