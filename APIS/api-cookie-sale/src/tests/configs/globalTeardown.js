module.exports = async function globalTeardown() {
    const instance = global.__MONGO_INSTANCE
    await instance.stop()
}
