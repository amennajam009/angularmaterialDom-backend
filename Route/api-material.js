const express = require('express');
const Router =  express.Router();

const {
    apiCrudOfMaterial,
    getUserData
} = require('../controller/api-material')

Router.post('/apiCrudCreate',apiCrudOfMaterial)
Router.get('/getUserData',getUserData)

module.exports = Router