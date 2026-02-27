const product = require('../models/product')
const ValidateProduct = require('../validations/product-validate')
const ServiceProduct = require('../services/product-service')

class ProductHandler {
    /**
     * Lista Produtos
     *
     * @path /products
     * @method get
     * @function getProducts
     */
    static async getProducts (_) {
        return await product.getAll()
    }
}

module.exports = ProductHandler

