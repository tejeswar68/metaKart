// Create router to handle product api reqs
const exp= require('express');
const productApp= exp.Router();

const expressAsyncHandler= require('express-async-handler');

// Body parsing middleware
productApp.use(exp.json());

// Product API



// Get all Products.
productApp.get('/get-products', expressAsyncHandler(async (req, res) => {

    // Get the product collection object.
    let prdtCollectionObject= req.app.get('prdtCollectionObject');

    let products= await prdtCollectionObject.find().toArray();
    res.send({message: 'All product data sent', payload: products});
}))



// Get product by ID
productApp.get('/get-product/:id', expressAsyncHandler(async (req, res) => {

    // Get the product collection object.
    let prdtCollectionObject= req.app.get('prdtCollectionObject');

    // Get the requested product id from request.
    let rprdtId= (+req.params.id);

    let rprdtObj= await prdtCollectionObject.findOne({prdouctId : rprdtId});

    // If product doesn't exist.
    if (rprdtObj == null) {
        res.send({msg: 'Product not Found.'});
    } else { // If product exists.
        res.send({msg: 'Product Found.', payload: rprdtObj});
    }
}))



// Create a product
productApp.post('/create-product', expressAsyncHandler(async (req, res) => {
    
    // Get the product collection object.
    let prdtCollectionObject= req.app.get('prdtCollectionObject');

    // Get the new product object from request.
    let newPrdt= req.body;

    // Insert the product object.
    await prdtCollectionObject.insertOne(newPrdt)
    res.send({msg: 'New Product created.'});
}))



// Update a Product by ID
productApp.put('/update-product', expressAsyncHandler(async (req, res) => {
    
    // Get the product collection object.
    let prdtCollectionObject= req.app.get('prdtCollectionObject');

    // Get the updated product from request.
    let updatedPrdt= req.body;

    // Update the product object.
    await prdtCollectionObject.updateOne({prdouctId : updatedPrdt.prdouctId}, {$set: {...updatedPrdt}});  
    res.send({msg: 'Product updated.'});
}))



// Remove a product by ID
productApp.delete('/remove-product/:id', expressAsyncHandler(async (req, res) => {

    // Get the product collection object.
    let prdtCollectionObject= req.app.get('prdtCollectionObject');

    // Get the requested product id from request.
    let dprdtId= (+req.params.id);

    // Delete the product object.
    await prdtCollectionObject.deleteOne({prdouctId : dprdtId});
    res.send({msg: 'Product deleted.'});
}))



// Export productApp
module.exports= productApp;
