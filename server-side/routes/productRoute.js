const express = require("express");
const { createCategory, categorylist } = require("../controllers/category");
const { allProducts, addProduct, singleProduct, deleteProduct, updateProduct } = require("../controllers/product");



const router = express.Router();

//Get all product
router.get('/', allProducts);

//Add a product
router.post('/add_product', addProduct);

//Get a single product
router.get('/:productUrl', singleProduct);

//Update a product
router.patch('/:id', updateProduct);

//Delete product
router.delete('/:productUrl', deleteProduct)

module.exports = router;