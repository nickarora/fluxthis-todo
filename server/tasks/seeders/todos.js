/* eslint-disable no-console */
import db from '../../config/db' //eslint-disable-line

import { Promise } from 'bluebird'
import { Todo } from '../../models'

const todosData = require('./todos.json')

const seedTodos = () => {
  console.log('loading todos', todosData)
  const todos = todosData.todos.map(todo =>
    Todo.findOneAndUpdate({ note: todo.note }, todo, { upsert: true })
  )

  return Promise.all(todos)
}

const seed = () =>
  seedTodos()
    .then(() => {
      console.log('seeding complete')
      return Todo.find({})
    })
    .then(todos => {
      console.log('loaded todos', todos)
      process.exit(0)
    })
    .catch((err) => {
      console.error(err.stack)
      process.exit(1)
    })

export default seed
