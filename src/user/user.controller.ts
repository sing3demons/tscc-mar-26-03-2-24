import { UserRepository } from './user.repository.js'
import type { Request, Response } from 'express'


export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  getAll = async (req: Request, res: Response) => {
    console.log('Getting all users')
    const users = await this.userRepository.getAll()
    return res.status(200).json(users)
  }
}
