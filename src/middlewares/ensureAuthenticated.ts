import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";


interface IPload {
    sub: string
}

export function ensureAuthenticated (request: Request, response: Response, next: NextFunction ) {
    // Receber token
    const authToken = request.headers.authorization;

    //console.log(token)
    if(!authToken) {
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ") 
     //console.log(token)
    // Validar se o Token está válido
    try {
        const { sub } = verify(authToken, "2cc0d48dc795e0548627fb67411486c1") as IPload;

        request.user_id = sub

        return next()
    }catch(err) {
        return response.status(401).end()
    }
    
    // Validar se o Token está preenchido
    
    // Recuperar informações do user


    return next(); 
}

