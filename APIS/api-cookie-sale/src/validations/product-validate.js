class ValidateProduct {
static validateProduct(product) {
    if(!product){
        throw{
            statusCode: 404, message: 'Produto não encontrado'
        }
    }
}
}
module.exports = ValidateProduct
