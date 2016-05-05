import { Router } from 'express'
import { Todo } from '../../models'

const router = new Router()

router.get('/', (req, res, next) =>
  Todo.find()
    .then(
      todos => res.status(200).json(todos),
      err => next(err)
    )
)

export default router
