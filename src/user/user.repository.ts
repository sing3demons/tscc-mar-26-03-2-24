import { Database } from '../core/mock/database.js'
import { UserModel } from './user.model.js'

export class UserRepository {
  constructor(private readonly db: Database<UserModel>) {}

  getAll = async () => {
    return await this.db.readAll()
  }
}
