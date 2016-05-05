import Express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

import routes from './routes'

/* initialize mongoDB */
import db from './config/db' // eslint-disable-line no-unused-vars

const app = new Express()

const errorHandler = (error, req, res, next) => {
  if (error.status && error.message) {
    return res.status(error.status).send(error.message).end()
  }

  return res.status(500).send('Internal Server Error!').end()
}

/* Middleware */
// Parse bodies as URL-encoded (from HTML forms)
app.use(bodyParser.urlencoded({ extended: true, limit: '25mb' }))

/* Routes */
app.use('/api', routes)
app.use('/', Express.static(path.resolve(__dirname, '../dist')))
app.use(errorHandler)

export default app
