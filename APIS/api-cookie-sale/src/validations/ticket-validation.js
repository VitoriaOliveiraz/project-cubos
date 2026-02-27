class TicketValidation {
static validateTicket (ticket){
    if (!ticket) {
        throw {
            statusCode: 404,
            message: 'Ticket não encontrado.'
        }
    }
}
    static validateUser( { name, cpf, email }) {
        if (!name) {
            throw {
                statusCode: 404,
                message: 'Campo nome é obrigatorio, certifique-se de preenche-lo'
            }
        }

        if (!cpf) {
            throw {
                statusCode: 404,
                message: 'Campo cpf é obrigatorio, certifique-se de preenche-lo'
            }
        }

        if (!email) {
            throw {
                statusCode: 404,
                message: 'Campo email é obrigatorio, certifique-se de preenche-lo'
            }
        }
    }

    static validatephoneAndMessage({ phoneNumber, firstMessage }) {
        if (!phoneNumber && !firstMessage) {
            throw { statusCode: 400, message: 'Por favor preencha todos os campos.' }
        }
        if ((phoneNumber && !firstMessage) || (firstMessage && !phoneNumber)) {
            throw { statusCode: 400, message: 'Nenhum campo pode ficar em branco, deve preencher todos.' }
        }
    }
    static validateCart({ productId, quantity }) {
        if (!productId) {
            throw {
                statusCode: 404,
                message: 'Campo productId é obrigatorio, certifique-se de preenche-lo'
            }
        }

        if (!quantity) {
            throw {
                statusCode: 404,
                message: 'Campo quantity é obrigatorio, certifique-se de preenche-lo'
            }
        }
    }
    static validateCloseTicket(ticket) {
        if(ticket.status === 'CLOSE'){
            throw{
                statusCode: 409,
                message:'Ticket não pode ser alterado, pois está fechado.'
            }

        }

    }

}

module.exports = TicketValidation
