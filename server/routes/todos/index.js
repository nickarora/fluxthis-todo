import { Router } from 'express'
import { Todo } from '../../models'

const router = new Router()

router.get('/', (req, res, next) =>
  Todo.find({})
    .then(
      todos => res.status(200).json(todos),
      err => next(err)
    )
)

router.put('/', ({ todo }, res, next) =>
  Todo.findOneAndUpdate(
    { _id: todo.id },
    { note: todo.note, complete: todo.complete }
  ).then(
    updatedTodo => res.status(200).json(updatedTodo),
    err => next(err)
  )
)

router.post('/', ({ todo }, res, next) =>
  Todo.insert(todo)
  .then(
    insertedTodo => res.status(200).json(insertedTodo),
    err => next(err)
  )
)

router.delete('/', ({ todo }, res, next) =>
  Todo.remove({ _id: todo.id })
  .then(
    deletedTodo => res.status(200).json(deletedTodo),
    err => next(err)
  )
)

export default router
