const fs=require('fs');
const path = require('path');
const testingImage = require('../modal/Imagetesitng')


const MytestingApi = async (req,res) =>{
    try {
        const {name , Class} = req.body;
        const MappingData = new testingImage({
            name , Class,
            imageDetails: {
                imageUrl: `assets/cards/${name}/${req.file}`
            }
        })
        const DataToSave = await MappingData.save()
        res.json({
            message:"api works successfully",
            data:DataToSave,
            result:true
        })
    } catch (error) {
        res.json({
            message:error.message,
            data:null,
            result:false
        })
    }
}

module.exports = {
    MytestingApi
}