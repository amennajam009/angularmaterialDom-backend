const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors')
const DataBaseConfig = require('./configuration/config');



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.text());
app.use(express.raw());
app.use(cors());
app.use('/assets', express.static('assets'));
const PORT =process.env.PORT; 





app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next();
     //if nothing of the response sent back so next() means other rou
});



const SendVariableData = require ('./Route/dropDown-Variable-route')
const sendAngularMaterialData =  require('./Route/material-dropDown-variable')
const saveVariableData = require ('./Route/Create-Angular-Bootstrap5')
const ImageTestingData = require('./Route/Imagetesting')
const api_Material = require('./Route/api-material')


//Using Routes
app.use('/SendVariableData' , SendVariableData);
app.use('/sendAngularMaterialData', sendAngularMaterialData)
app.use('/saveVariableData' , saveVariableData)
app.use('/ImageTestingData' , ImageTestingData)
app.use('/api_material',api_Material)




app.listen(PORT,()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    // console.log(process.env);
})