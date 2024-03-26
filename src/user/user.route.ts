import { Router } from 'express'
import { UserModel } from './user.model.js'
import { v4 as uuidv4 } from 'uuid'
import { UserRepository } from './user.repository.js'
import { Database } from '../core/mock/database.js'
import { userController } from './user.bootstrap.js'

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
// const userController = new UserController(userRepository)

const router = Router()

router.get('/', userController.getAll)

export default router
