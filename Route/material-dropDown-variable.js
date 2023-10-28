const express = require("express")
const Router = express.Router()



const {materialDropDownVariable} = require('../controller/material-drop-down-Variable')

Router.get('/materialDropDownVariable' ,materialDropDownVariable)

module.exports = Router;