// SETUP EXPRESS
const express = require('express')
const app = express()

//SETUP CONTROLLER AND CALL PRODUCTS FUNCTION
const dataController = require('./controllers/getData')
const { products } = require('./models/products')
const productData = dataController.getProducts()

//PORT CHANNEL
const PORT = 3000

//SETUP VIEW ENGINE
app.set('view engine', 'ejs')
app.set('views', './views')

//READ ROOT ROUTE AND RENDER ITS INDEX EJS FILE
app.get('/', (req, res) => {
    res.render('index', { pageTitle: "Home", header: 'Welcome Consumer' })
})

//SETUP OTHER ROUTES: PRODUCTS AND NEW
app.get('/products',(req,res)=>{
    res.render('products')
})
app.get('/new', (req,res) => {
    res.render('new')
})

//LISTEN TO PORT
app.listen(PORT, (res, req) => {
    console.log(`PORT is listening on ${PORT}`)
})