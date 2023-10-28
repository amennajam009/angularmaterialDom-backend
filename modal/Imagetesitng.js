//Dependencies
const mongoose = require('mongoose');



const testingImage = new mongoose.Schema({
    name : { type:String, required:true },
    Class:{type:String, required:true},
    imageDetails: [
        {
            imageUrl: { type: String  },
            imageName: { type: String },
            imageMimeType: { type: String },
        }
    ]
    
},
 { timestamps: true });



 module.exports = mongoose.model('testingImage', testingImage); 