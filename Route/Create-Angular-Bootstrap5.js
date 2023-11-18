const express = require("express")
const Router = express.Router()

const {SaveSelectedVariable,
      SaveTestingComponent,
      getSelectedVariable } = require('../controller/Create-Angular-Bootstrap5')


Router.post("/SaveSelectedVariable",SaveSelectedVariable)
Router.post("/SaveTestingComponent",SaveTestingComponent)
Router.get("/getSelectedVariable",getSelectedVariable)





module.exports = Router;