require('dotenv').config({ path: 'env/.env' })

const log4js = require('log4js')

log4js.configure('src/configs/log4js.json')

const restServer = require('./src/rest-server')

restServer.start()
