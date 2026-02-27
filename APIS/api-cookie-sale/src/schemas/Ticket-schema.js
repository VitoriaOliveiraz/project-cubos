const MongoDB = require('@mundiale-private/mongodb')

module.exports.TicketSchema = new MongoDB.schemaAPI.Schema({
    idTicket: {
        type: Number,
        default: null
    },

    name: {
        type: String,
        default: ''
    },

    cpf: {
        type: String,
        default: ''
    },

    email: {
        type: String,
        default: ''
    },

    phoneNumber: {
        type: String,
        default: ''
    },

    firstMessage: {
        type: String,
        default: ''
    },

    status: {
        type: String,
        default: ''
    },
    cart: {
        type: Array,
        default: []
    },
    priceInReal: {
        type: Number,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date
    },

    updatedAt: {
        type: Date,
        default: Date
    }
})
