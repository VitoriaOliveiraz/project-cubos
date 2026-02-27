class CustumerService{
    static setUserData (ticket, userData){
        const {name, cpf, email} = userData
        ticket.name = name
        ticket.cpf = cpf
        ticket.email = email
    }

    static setCartData (ticket, product, quantity){
        const { cart } = ticket
        product.quantity = quantity
        cart.push(product)
    }
}
module.exports = CustumerService
