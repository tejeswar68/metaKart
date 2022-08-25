// Create express app
const exp= require('express');
const app= exp();
const mclient= require('mongodb').MongoClient;
// npm install express express-async-handler dotenv jsonwebtoken bcryptjs mongodb

// Import dotenv.
require('dotenv').config();

// Import path module.
const path= require('path');

// Connect build of React App with NodeJS
app.use(exp.static(path.join(__dirname, './build')));

// DB Connection URL
const DBurl= process.env.DATABASE_CONNECTION_URL;

// Connect with MongoDB server
mclient.connect(DBurl)
    .then((client) => {

        // Get DB Object
        let dbObj= client.db('MetaKartDB');

        // Create Collection Objects
        let userCollectionObject= dbObj.collection('users');
        let prdtCollectionObject= dbObj.collection('products');  

        // Sharing collection objects with respective APIs
        app.set('userCollectionObject', userCollectionObject);
        app.set('prdtCollectionObject', prdtCollectionObject);

        console.log('DB Connection Success');
    })
    .catch((err) => {
        console.log('Error in DB Connection ', err)
    })

// Import userApp and productApp
const userApp= require('./APIS/userApi');
const productApp= require('./APIS/productApi');

// Execute specific middleware based on path
app.use('/user', userApp);
app.use('/product', productApp);

// Dealing with page refreshes.
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
})


// Invalid-Path handler Middleware
app.use((req, res, next) => {
    res.send({message: `path ${req.url} is INVALID`});
})

// Error-Handling Middleware
app.use((err, req, res, next) => {
    res.send({message: 'Error Occurred', reason: `${err.message}`});
})

// Assigning Port#
app.listen(process.env.PORT, () => console.log(`Web Server listnening on ${process.env.PORT}`));