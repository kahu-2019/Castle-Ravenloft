const path = require('path')
const express = require('express')

const api = require('./routes/api')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', api)

module.exports = server
