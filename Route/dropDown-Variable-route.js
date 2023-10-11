const express = require('express');
const Router =  express.Router();

const {SendDropDownVariables
} = require('../controller/drop-down-Variables')

Router.get('/SendDropDownVariables',SendDropDownVariables)

module.exports = Router