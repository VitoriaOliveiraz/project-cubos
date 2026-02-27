const MongoDB = require('@mundiale-private/mongodb')

module.exports.ProductSchema = new MongoDB.schemaAPI.Schema({
    productId: {
        type: Number,
        default: null
    },
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    priceInCents: {
        type: Number,
        default: null
    },
    quantity:{
    type: Number,
    default: null
    },
    isAvailable:{
        type: Boolean,
        default: null
    }
})
