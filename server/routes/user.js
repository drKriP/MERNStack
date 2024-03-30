const express = require('express');
const router = express.Router();

//import controller
const {register} = require('../controllers/user');
const {login} = require('../controllers/user');
const {logout} = require('../controllers/user');

//import middleware
const {userRegisterValidator} = require('../middlewares/user');

//api routes
router.post('/register',userRegisterValidator, register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;