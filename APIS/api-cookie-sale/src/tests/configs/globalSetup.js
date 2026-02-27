// eslint-disable-next-line import/no-extraneous-dependencies
const { MongoMemoryServer } = require('mongodb-memory-server')

module.exports = async function globalSetup() {
    require('dotenv').config({ path: 'env/.env.test' })

    const instance = await MongoMemoryServer.create({ instance: { port: 27017 } })
    global.__MONGO_INSTANCE = instance
}
