require('dotenv').config({ path: 'env/.env.test' })

const RestServer = require('@mundiale-private/rest-server')

const handlerFiles = {
    'test-handler': require('../handlers/test-handler')
}

module.exports = new RestServer({ handlerFiles }).configure().server
