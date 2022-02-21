const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { MONGODB_URI } = require('./utils/config')
const logger = require('./utils/logger')
const blogsRouter = require('./controllers/blogs')

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).then(
  () => {logger.info('Database is connected') },
  err => { logger.error('Can not connect to the database'+ err)}
)

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

const PORT = 3003
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
module.exports = app