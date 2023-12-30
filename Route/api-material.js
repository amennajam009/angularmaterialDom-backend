const express = require('express');
const Router =  express.Router();

const {
    apiCrudOfMaterial
} = require('../controller/api-material')

Router.post('/apiCrudCreate',apiCrudOfMaterial)

module.exports = Router