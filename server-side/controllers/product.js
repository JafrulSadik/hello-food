const Product = require("../models/Product");
const Category = require("../models/Category");


//All products list
const allProducts = async (req, res, next) => {
    try{
        const products = await Product.find().populate("_category");

        res.status(200).json(products);

    } catch (err){
        next(err);
    }
}

//Add new product
const addProduct = async (req, res, next) =>{
    try{

        
        let headerLink = req.body.name;

        let customLink = headerLink.toLowerCase().replaceAll(" ","-");

        //Search for duplicate url of product
        let  dupProduct = await Product.find({productUrl : customLink});

        if(dupProduct.length) return res.status(409).send("Duplicate name found! Please change the name.");
        
        const product = new Product({...req.body, "productUrl" : customLink});


        const productSave = await product.save();


        await Category.updateOne({
                _id: req.body._category
            } , {
                $push: {
                    products : productSave
                }
            }
        )

        res.status(200).send('Product added succesfully!');

    } catch (err){
        next(err);
    }
}

//get a single product
const singleProduct = async (req, res, next) =>{
    try{
        
        const product = await Product.findOne({productUrl: req.params.productUrl})

        if(!product) return res.status(404).send('Product not found!')

        res.status(200).send(product);

    } catch (err){
        next(err);
    }
}


//Update a product
const updateProduct = async (req, res, next) => {
    try{

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            }
        )

        res.status(200).send("Product updated successfully!")
    } catch (err){
        next(err)
    }
}


//Delete a product
const deleteProduct = async (req, res, next) =>{
    try{
        
        await Product.deleteOne({productUrl: req.params.productUrl});

        res.status(200).send('Product deleted succesfully!');

    } catch (err){
        next(err);
    }
}

module.exports = {
    addProduct,
    allProducts,
    singleProduct,
    updateProduct,
    deleteProduct
}