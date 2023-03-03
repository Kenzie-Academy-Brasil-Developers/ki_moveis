import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUsersReturn } from "../../interfaces/users.interfaces"
import { returnMultipleUserSchema } from "../../schemas/users.schemas"


const listUsersService = async (): Promise<IUsersReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find()

    const users = returnMultipleUserSchema.parse(findUsers)
   
    return users
}

export {
    listUsersService
}