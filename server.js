// SETUP EXPRESS
const express = require('express')
const app = express()

//SETUP CONTROLLER AND CALL PRODUCTS FUNCTION
const dataController = require('./controllers/getData')
const productData = dataController.getProducts()
const product = require('./models/products')
// Middleware is a function
//they update the request as soon as they come in.
app.use((req, res, next) => {
    console.log('Middleware running')
    next() // go to the next middleware or to the response
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//SETUP VIEW ENGINE
app.set('view engine', 'ejs')
app.set('views', './views')

//PORT CHANNEL
const PORT = 3000

//READ ROOT ROUTE AND RENDER ITS INDEX EJS FILE
app.get('/', (req, res) => {
    res.render('index', { pageTitle: "Home", header: 'Welcome Consumer' })
})

//SETUP PRODUCTS ROUTE 
app.get('/products', (req, res) => {
    res.render('products',{items: productData})
    res.send(productData)
})
//SETUP NEW ROUTE
app.get('/products/new', (req, res) => {
    res.render('new')
})

//REMEMBER SPECIFICITY OF ROUTE. This should be below general routes
//SETUP PRODUCT ID ROUTE :id is the key the browser number is the value. 
app.get('/products/:id',(req,res)=>{
    const result = productData.filter(item => item.id === Number(req.params.id))
    if(result.length === 0){
       
            res.status(404).render('404')
        }
                else{ res.render('search', {productData: result[0]})}})



app.post('/products',(req,res)=>{
console.log(req.body)
productData.push(req.body)
res.redirect('products')
})

//LISTEN TO PORT
app.listen(PORT, (res, req) => {
    console.log(`PORT is listening on ${PORT}`)
})