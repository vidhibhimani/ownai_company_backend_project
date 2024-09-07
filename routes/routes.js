const express = require('express');
const controller = require("../controller/authentication");
const auth = require('../middleware/authmiddleware');


const route = express.Router();


route.post('/register', controller.register);

route.post('/login', controller.login);

route.get('/userlist', auth, controller.userlist);

route.get('/search', controller.searchByCountry);



module.exports = route