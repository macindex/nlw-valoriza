import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateRequest {
    email: string
    password: string
}

class AuthenticateUserService{

    async execute({ email, password }){
        const usersRepositories = getCustomRepository(UsersRepositories) 

        const user = await usersRepositories.findOne({
            email
        })
        if(!user) {
            throw new Error("Email/Password incorrect")
        }
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }
        const token = sign({
            email: user.email
        }, "66c761f9ec0d72cc0d48dc795e0548627fb67411486c1f7b809854a752ba5f8e", {
            subject: user.id,
            expiresIn: "2d"
        })
        return token;
    }
}

export { AuthenticateUserService }


