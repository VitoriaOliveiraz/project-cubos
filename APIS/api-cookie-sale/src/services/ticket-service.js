const ticketModels = require('../models/ticket') //Pode tirar esse?
const TicketValidation = require('../validations/ticket-validation')
const ValidateTicket = require('../validations/ticket-validation')
const Ticket = require('../models/ticket') //Esse é pra que?
class TicketService {
    static async addNewTicket({ phoneNumber, firstMessage }) {
        try {
            const ticket = new Ticket()
            ticket.idTicket = Math.floor(Math.random() * 1000000)
            ticket.status = 'OPEN'
            ticket.phoneNumber = phoneNumber
            ticket.firstMessage = firstMessage
            await ticketModels.insertNewTicket(ticket)
            const newTicket = await ticketModels.getOneTicket(ticket.idTicket)
            return newTicket
        } catch (error) {
            throw {
                message: error.message,
                statusCode: error.status || error.statusCode || 500
            }
        }
    }

    static async updateTicket(ticket) {
        try {
            await ticketModels.updateTicket(ticket)
        } catch (error) {
            throw {
                message: error.message,
                statusCode: error.status || error.statusCode
            }
        }
    }
    static endTicket(ticket) {
        ticket.status = 'CLOSE'
    }

    static priceInReal(ticket) {
        const { cart } = ticket
        const[{priceInCents}] = cart
        const priceIncent = parseInt(priceInCents)
        ticket.priceInReal = (priceIncent / 100).toFixed(2)
   }

   static ClosingTicketsWithSimilarNumbers(ticket, newPhoneNumber){
    const {phoneNumber} = ticket
    ticket.forEach(phoneNumber => {
     if(phoneNumber === newPhoneNumber){
     ticket.status = 'CLOSE'
     }
    });
   }
}
module.exports = TicketService
