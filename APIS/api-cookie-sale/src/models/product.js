const MongoDB = require('@mundiale-private/mongodb')

const ProductSchema = require('../schemas/product-schema')

const connection = MongoDB.connectionAPI.getDatabase('Cookies')

const Product = connection.model('product', ProductSchema, 'product')

Product.getAll = async () => {
    return Product.find()
}

Product.getOneProduct = async (productId) => {
    return Product.findOne({ productId }).lean()
}

module.exports = Product
