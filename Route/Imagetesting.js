// Router
const express = require ('express');
const Router = express.Router();






const { MytestingApi} = require ('../controller/Imagetesting')





// Define Routers
Router.post("/MytestingApi",MytestingApi)
// Define Routers

//Export
module.exports=Router