// Router
const express = require ('express');
const Router = express.Router();
const {saveFile } = require("../middleware/savefile")





const { MytestingApi} = require ('../controller/Imagetesting')





// Define Routers
Router.post("/MytestingApi",saveFile.single('testing-image'),MytestingApi)
// Define Routers

//Export
module.exports=Router