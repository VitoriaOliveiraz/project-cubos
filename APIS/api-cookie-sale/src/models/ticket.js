const MongoDB = require('@mundiale-private/mongodb')

const connection = MongoDB.connectionAPI.getDatabase('Cookies')

const { TicketSchema } = require('../schemas/Ticket-schema') //Tava exportando como objeto

const Ticket = connection.model('ticket', TicketSchema, 'ticket')

Ticket.getAll = async () => {
    return Ticket.find()
}
Ticket.getOneTicket = async (idTicket) => {
    return Ticket.findOne({ idTicket }).lean()
}

Ticket.insertNewTicket = async (ticketData) => {
    ticketData.createdAt = new Date()
    ticketData.updatedAt = new Date()
    return ticketData.save()
}

Ticket.updateTicket = async (ticket) => {
    try {
        const _id = ticket._id
        ticket.updatedAt = new Date()
        return Ticket.findOneAndUpdate({ _id }, ticket).lean()
    } catch (error) {
        throw {
            message: error.message,
            statusCode: error.statusCode
        }
    }
}

Ticket.getOpenTicketsByPhone = async ({phoneNumber}) => {


}

module.exports = Ticket
