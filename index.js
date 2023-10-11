const express = require('express');
const LoadMyEnvironmentalVariable = require('./configuration/LoadEnvironmentalVariable')
require('dotenv').config();
const path = require('path');
const cors = require('cors')
const DataBaseConfig = require('./configuration/config');



const app = express();
app.use(express.urlencoded({ extended: true }));
// hum edhr json icliye use kr rhy han kyu k yeh space kaam leta hai cuz yeh string may hai toh yeh humry data ko parse kr k string may convert krdyga taak 
// data storage kaam use ho
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());
// const PORT = process.env.PORT;
// static ka matlb hai icko hum access kr paa rhy han 
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


app.listen(PORT,()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    // console.log(process.env);
})