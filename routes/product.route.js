const express = require('express');

const { createProduct, getAllProducts, getSpecificProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

const router = express.Router();

// Create API 
router.post('/', createProduct);

// Read API
router.get('/', getAllProducts);
router.get('/:id', getSpecificProduct);

// Update API
router.put('/:id', updateProduct);

// Delete API
router.delete('/:id', deleteProduct);

module.exports = router;