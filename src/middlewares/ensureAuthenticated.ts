import { Request, Response, NextFunction, request } from "express";




export function ensureAuthenticated (reques: Request, response: Response, next: NextFunction ) {
    // Receber token
    const token = request.headers.authorization;

    console.log(token)
    return next(); 
    // Validar se o Token está preenchido
    // Validar se o Token está válido
    // Recuperar informações do user



}

