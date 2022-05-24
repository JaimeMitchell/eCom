const data = require('../models/products')

module.exports.getProducts = () => {
    return data.products
}
