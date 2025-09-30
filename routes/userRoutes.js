const express = require('express');
const { getUser, createUser, registerUser } = require('../controllers/userController');
const userRouter = express.Router();


userRouter
    .route('/')
    .get(getUser)
    .post(createUser)

userRouter
    .route('/register')
    .post(registerUser)


module.exports = userRouter;
