import type { Request, Response } from 'express'
import { Router } from 'express'
import { userRoutes } from './user/index.js'
const router = Router()
router.use('/users', userRoutes)

router.use('/', (req: Request, res: Response) => {
  res.json({ message: 'Home' })
})

export default router
