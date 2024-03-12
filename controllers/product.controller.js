
const Product = require('../models/product.model.js');

// Create API, to create new products with new data
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message : error.message})
    }
};

// Read API, to view all created products
const getAllProducts = async ( req, res ) => {
    try{
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};

// Read API, to view the specifi create product
const getSpecificProduct = async ( req, res ) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

// Update API, to update product with new data
const updateProduct = async ( req, res ) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            res.status(404).json({message : "Product is not found!"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json({message : "Product is updated successfully", updatedProduct});
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// Delete API, to delete the specific product
const deleteProduct = async ( req, res ) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            res.status(404).json({message : "Product is not found"});
        }
        res.status(200).json({message : "Product deleted Successfully"});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getSpecificProduct,
    updateProduct,
    deleteProduct
};

// // Read API, to view all created products
// app.get('/api/products', async (req, res) => {
//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message : error.message});
//     }
// });

// // Read API, to view the specifi create product
// app.get('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message : error.message});
//     }
// });

// // Update API, to update product with new data
// app.put('/api/product/:id', async (req, res) => {
//     try{
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if(!product){
//             return res.status(404).json({message : "Product not found!"});
//         }
//         const updatedProduct = await Product.findById(id); 
//         res.status(200).json(updatedProduct);
//     } catch (error){
//         res.status(500).json({message : error.message})
//     }
// });

// //Delete API, to delete the specific product
//  app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message : "Product not found"});
//         }
//         res.status(200).json({message : "Product deleted successfully"});
//     } catch (error) {
//         res.status(500).json({message : error.message});
//     }
//  });