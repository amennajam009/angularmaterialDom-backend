//Dependencies
const mongoose = require('mongoose');


// FourCards

const testingImage = new mongoose.Schema({
    name : { type:String, required:true },
    Class:{type:String, required:true},
    imageDetails: [
        {
            imageUrl: { type: String  },
        }
    ]
    
},
 { timestamps: true });



 module.exports = mongoose.model('testingImage', testingImage); 