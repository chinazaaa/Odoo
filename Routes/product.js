const express = require('express')
const { successResMsg } = require('../Utils/response');
const {
    getProducts,
    createProduct
} = require('../Controllers/products')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//route to get products in the db
app.get('/products', async (req, res) => {
    try {
        const result = getProducts()
        successResMsg(
            res,
            true,
            "List of Products",
            200,
            result
          );
    } catch (e) {
        console.error(e)
        return res.status(500).send({
            message: e.name
        })
    }
})
// route to create products
app.post('/products', async (req, res) => {
    const {
        name,
        type,
        categ_id,
        uom_id,
        uom_po_id
    } = req.body

    if (!name || !type || !categ_id || !uom_id || !uom_po_id) {
        return res.status(400).send({
            message: 'Missing required body parameters!'
        })
    }

    try {
        const result = createProduct(req.body)
        successResMsg(
            res,
            true,
            "Product created successfully",
            200,
            result
          );
    } catch (e) {
        console.error(e)
        return res.status(500).send({
            message: e.name
        })
    }
})

//update products
app.put('/products', async (req, res) => {
   
    

    try {
        const result = updateProduct(req.params.id, req.body)
        successResMsg(
            res,
            true,
            "Product updated successfully",
            200,
            result
          );
    } catch (e) {
        console.error(e)
        return res.status(500).send({
            message: e.name
        })
    }
})

//delete products
app.delete('/products', async (req, res) => {
  
    try {
        const result = deleteProduct(req.params.id, req.body)
        successResMsg(
            res,
            true,
            "Product deleted successfully",
            200,
            result
          );
    } catch (e) {
        console.error(e)
        return res.status(500).send({
            message: e.name
        })
    }
})
app.listen(3000, () => console.log('Server running in http://127.0.0.1:3000'))