const express = require("express")
const Router = express.Router()

const {SaveSelectedVariable } = require('../controller/Create-Angular-Bootstrap5')


Router.post("/SaveSelectedVariable",SaveSelectedVariable)







module.exports = Router;