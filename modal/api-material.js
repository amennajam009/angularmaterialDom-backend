const mongoose = require('mongoose');



const apiCrudMaterial = new mongoose.Schema({
    first_name : { type:String, required:true },
    last_name  :{type:String, required:true},
    status : [
        {
            id: {type:Number},
            status_name: {type:String},
            status_color: {type:String},
        }
    ]
},
 { timestamps: true });



 module.exports = mongoose.model('aoiCrudMaterial', apiCrudMaterial); 