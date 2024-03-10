const express = require('express');
const mongoose = require('mongoose');

const Product = require('./models/product.model.js');

const app = express();

// why use Middleware becasue JSON is not passed through node js by default
// So, Middleware is used to configure it
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Lets Create a Simple CRUD Node API Server!..');
});

// Read API, to view all created products
app.get('/api/products', async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
});

// Read API, to view the specifi create product
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
});

// Create API, to create new products with new data
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message : error.message})
    }
});

// Update API, to update product with new data
app.put('/api/product/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message : "Product not found!"});
        }
        const updatedProduct = await Product.findById(id); 
        res.status(200).json(updatedProduct);
    } catch (error){
        res.status(500).json({message : error.message})
    }
});

//Delete API, to delete the specific product
 app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message : "Product not found"});
        }
        res.status(200).json({message : "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
 })

mongoose.connect("mongodb+srv://khantwaiyan11:WXb25x87x4fJNBxz@simplebackenddb.wvmxut6.mongodb.net/Simple-CRUD-Node-API?retryWrites=true&w=majority&appName=SimpleBackendDB").then(() => {
    console.log("Connected to DataBase!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(() =>{
    console.log("Connection Failed");
})