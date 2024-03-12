const express = require('express');
const mongoose = require('mongoose');
 
const productRoute = require('./routes/product.route.js');

const app = express();

// why use Middleware?
// Data is not passed through by default without using any format like json or any other.
// Using Middleware to configure and process data with desired format like json and other methods.
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res)=> {
    res.send('Lets Create a Simple CRUD Node API Server!..');
});

mongoose.connect("mongodb+srv://khantwaiyan11:WXb25x87x4fJNBxz@simplebackenddb.wvmxut6.mongodb.net/Simple-CRUD-Node-API?retryWrites=true&w=majority&appName=SimpleBackendDB").then(() => {
    console.log("Connected to DataBase!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(() =>{
    console.log("Connection Failed");
})