const data = require('../models/products')

//Remember that in the models file I have the data stored in variable 'products', so this is returning the variable of the file 'data' with the specific data called 'products' so data.products is returned
module.exports.getProducts = () => {
    return data.products
}
