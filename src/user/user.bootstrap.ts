import { Database } from '../core/database.js'
import { UserModel } from './user.model.js'
import { v4 as uuidv4 } from 'uuid'
import { UserRepository } from './user.repository.js'
import { UserController } from './user.controller.js'

const db = new Database<UserModel>('users', {
  defaultData: [
    {
      id: uuidv4(),
      username: 'firstuser',
      password: 'password',
      email: 'first@email.com',
    },
  ],
})


const userRepository = new UserRepository(db)
export const userController = new UserController(userRepository)
