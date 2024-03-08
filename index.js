const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res)=> {
    res.send('Lets Create a Simple CRUD Node API Server!..');
});

mongoose.connect("mongodb+srv://khantwaiyan11:WXb25x87x4fJNBxz@simplebackenddb.wvmxut6.mongodb.net/Simple-CRUD-Node-API?retryWrites=true&w=majority&appName=SimpleBackendDB").then(() => {
    console.log("Connected to DataBase!");
}).catch(() =>{
    console.log("Connection Failed");
})