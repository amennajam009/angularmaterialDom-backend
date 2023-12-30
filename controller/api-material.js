const apiCrudMaterial = require('../modal/api-material')


const apiCrudOfMaterial = async (req,res) =>{
  try {
    const {first_name , last_name} = req.body;
    const mappingData = new apiCrudMaterial({
        first_name,
        last_name,
        status:[
            {
                id:1,
                status_name:'ACTIVE',
                status_color:`#4CBB17`
            }
        ],
    })
    const dataToSave = await mappingData.save()
    res.json({
        message:'User Created Successfully!!!',
        data:dataToSave,
        result:true,
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
    apiCrudOfMaterial
}
