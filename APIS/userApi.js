// Create router to handle user api reqs
const exp= require('express');
const userApp= exp.Router();

// Import dotenv.
require('dotenv').config();

const expressAsyncHandler= require('express-async-handler');

// Body parsing middleware
userApp.use(exp.json());

// Import bcryptjs to hash the passwords.
const bcryptjs= require('bcryptjs');

// To create signed tokens during login.
const jwt= require('jsonwebtoken');

// User API



// Get all users.
userApp.get('/get-users', expressAsyncHandler(async (req, res) => {
    
    // Get user collection object.
    let userCollectionObject= req.app.get('userCollectionObject');

    // Get all users.
    let users= await userCollectionObject.find().toArray();
    res.send({msg: 'All user data fetched.', payload: users});
}))



// For user login.
userApp.post('/login', expressAsyncHandler(async (req, res) => {
    
    // Get user collection object.
    let userCollectionObject= req.app.get('userCollectionObject');     

    // Get user credentials object from request.
    let userCredObj= req.body;

    // Search for user from username.
    let userInDB= await userCollectionObject.findOne({username : userCredObj.username});

    // If User not Found.
    if (userInDB == null) {
        res.send({msg: 'User does not exist.'});
    } else {    // If user exists.

        // Compare passwords.
        let status= await bcryptjs.compare(userCredObj.password, userInDB.password);

        // Incorrect password given.
        if (status == false) {
            res.send({msg: 'Incorrect username/password.'});
        } else {    // User credentials are correct.
            
            // Create the token.
            let token= jwt.sign({username: userCredObj.username}, process.env.SECRET_KEY, {expiresIn : 3600});

            // Sending token to clent.
            res.send({msg: 'Login Success.', payload: token, userObj: userInDB});
        }
    }
}))



// Create a new user.
userApp.post('/create-user', expressAsyncHandler(async (req, res) => {
    
    // Get user collection object.
    let userCollectionObject= req.app.get('userCollectionObject');

    // Get user object from request.
    let newUserObj= req.body;

    // Check is such a user exists from before.
    let userInDB= await userCollectionObject.findOne({username : newUserObj.username});

    // If such a user exists.
    if (userInDB !== null) {
        res.send({msg: 'Username already exists. Please choose a new one.'});
        return;
    } 

    // If user doesn't exist.
    // hash the password.
    let hashedPswd= await bcryptjs.hash(newUserObj.password, 6)

    // replace the plaintext pswd with the hashed pswd.
    newUserObj.password= hashedPswd;

    // Insert user.
    await userCollectionObject.insertOne(newUserObj);
    res.send({msg: 'User Created Successfully.'});
}))



// Update a user.
userApp.put('/update-user', expressAsyncHandler(async (req, res) => {
    
}))



// Remove a user with given id.
userApp.delete('/remove-user/:id', expressAsyncHandler(async (req, res) => {
    
}))

// Export userApp
module.exports= userApp;