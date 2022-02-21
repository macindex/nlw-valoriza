import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: String;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute ({ name, email, admin, password }){
        const usersRepository = getCustomRepository(UsersRepositories);
        
        
        if(!email){
            throw new Error("Incorrect email");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email,
        });
        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        })
        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }

