const RestServer = require('@mundiale-private/rest-server')

const handlerFiles = {
    'ticket-handler': require('./handlers/ticket-handler'),
    'product-handler': require('./handlers/product-handler'),
}

module.exports = new RestServer({
    handlerFiles,
    metrics: {
        onlyErrors: process.env.INFLUX_ONLY_ERRORS === 'true',
        fullResponse: process.env.INFLUX_FULL_RESPONSE === 'true'
    }
}).configure()
