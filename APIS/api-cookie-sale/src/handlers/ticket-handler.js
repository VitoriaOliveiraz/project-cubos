const TicketValidation = require('../validations/ticket-validation')
const TicketService = require('../services/ticket-service')
const ValidateProduct = require('../validations/product-validate')
const CustumerService = require('../services/custumer-service')
const Ticket = require('../models/ticket')
const Product = require('../models/product')

class TicketHandler {
    /**
     * Cria tickets
     *
     * @path /tickets
     * @method post
     * @function createTickets
     *
     * @required
     * @in body
     * @param {string} phoneNumber
     * @param {string} firstMessage
     */
    static async createTickets(event) {
        const { phoneNumber, firstMessage } = JSON.parse(event.body)
        TicketValidation.validatephoneAndMessage({ phoneNumber, firstMessage })
        const newTicket = await TicketService.addNewTicket({ phoneNumber, firstMessage })
        return newTicket
    }

    /**
     * Salva dados do usuario.
     *
     * @path /tickets/user
     * @method post
     * @function UpdateTicketWithUser
     * @required
     * @in body
     * @param {string} idTicket
     * @param {string} name
     * @param {string} cpf
     * @param {string} email

     */
    static async UpdateTicketWithUser(event) {
        const { idTicket, name, cpf, email } = JSON.parse(event.body)
        const ticket = await Ticket.getOneTicket(idTicket)
        TicketValidation.validateTicket(ticket)
        TicketValidation.validateUser({ name, cpf, email })
        CustumerService.setUserData(ticket, { name, cpf, email })
        TicketValidation.validateCloseTicket(ticket)
        await TicketService.updateTicket(ticket)
        return ticket
    }

    /**
     * Adiciona produto ao ticket
     *
     * @path /tickets/cart
     * @method post
     * @function addCartTicket
     *
     * @required
     * @in body
     * @param {string} idTicket
     * @param {string} idProduct
     * @param {number} quantity
     *
     */
    static async addCartTicket(event) {
        const { idTicket, productId, quantity } = JSON.parse(event.body)
        const ticket = await Ticket.getOneTicket(idTicket)
        TicketValidation.validateTicket(ticket)
        TicketValidation.validateCart({ productId, quantity })
        const product = await Product.getOneProduct(productId)
        ValidateProduct.validateProduct(product)
        CustumerService.setCartData(ticket, product, quantity)
        TicketValidation.validateCloseTicket(ticket)
        await TicketService.updateTicket(ticket)
        return ticket
    }

    /**
     * Resumo da Compra
     *
     * @path /tickets/summary/{idTicket}
     * @method get
     * @function getSummary
     *
     * @required
     * @in path
     * @param {string} idTicket
     *
     */
    static async getSummary(event) {
        const idTicket = event.params.idTicket
        const ticket = await Ticket.getOneTicket(idTicket)
        TicketValidation.validateTicket(ticket)
        TicketService.priceInReal(ticket)
        return ticket
    }

    /**
     *  Finaliza a Compra
     *
     * @path /tickets/checkout/{idTicket}
     * @method post
     * @function EndTicket
     *
     * @required
     * @in path
     * @param {string} idTicket
     *
     * @required
     * @in body
     * @param {string} status
     */
    static async EndTicket(event) {
        const idTicket = event.params.idTicket
        const ticket = await Ticket.getOneTicket(idTicket)
        TicketValidation.validateTicket(ticket)
        TicketValidation.validateUser(ticket)
        TicketValidation.validatephoneAndMessage(ticket)
        await TicketService.updateTicket(ticket)
        TicketService.endTicket(ticket)
        await TicketService.updateTicket(ticket)
        return { messege: 'Pedido concluido' }
    }

    /**
     * Fechando Ticket
     *
     * @path /tickets/:idTicket/close
     * @method post
     * @function closeTicket
     *
     * @required
     * @in path
     * @param {string} idTicket
     */
    static async closeTicket(event) {
        const { idTicket } = event.params
        const ticket = await Ticket.getOneTicket(idTicket)
        TicketValidation.validateTicket(ticket)
        TicketValidation.validateCloseTicket(ticket)
        TicketService.endTicket(ticket)
        TicketService.updateTicket(ticket)
        return { messege: 'Ticket fechado com sucesso ' }
    }
}

module.exports = TicketHandler
