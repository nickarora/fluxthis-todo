/* eslint-disable no-console */
import app from './app.js'

const PORT = process.env.PORT || 3000

// Initialize the server
app.listen(PORT, () => {
  console.info('Server listening on port', PORT)
})

process.on('uncaughtException', (err) => {
  console.error(err.stack || err)
  console.warn('exiting process because of uncaught exception.')
  process.exit()
})

process.on('SIGTERM', (err) => {
  console.warn('received SIGTERM, shutting down.', err)
  process.exit()
})
