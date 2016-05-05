/* eslint-disable no-console */
import mongoose from 'mongoose'

switch (process.env.NODE_ENV) {
  case 'production':
  case 'test':
  default: // development
    mongoose.connect('localhost', 'fluxthis-todo-development')
    mongoose.set('debug', false) // dont log mongo actions
}

const db = mongoose.connection

db.on('error', () => {
  console.error.bind(console, 'connection error:')
})
db.on('disconnecting', () => {
  console.log('Database', db.name, 'disconnecting.')
})
db.once('open', () => {
  console.log('Connection to', db.name, 'established.')
})

export default db
