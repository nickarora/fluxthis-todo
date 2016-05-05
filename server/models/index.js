import mongoose from 'mongoose'
import TodoSchema from './schemas/todo'

export default {
  Todo: mongoose.model('Todo', TodoSchema),
}
