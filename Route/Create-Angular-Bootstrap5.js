const express = require("express")
const Router = express.Router()

const {SaveSelectedVariable,
      SaveTestingComponent } = require('../controller/Create-Angular-Bootstrap5')


Router.post("/SaveSelectedVariable",SaveSelectedVariable)
Router.post("/SaveTestingComponent",SaveTestingComponent)






module.exports = Router;