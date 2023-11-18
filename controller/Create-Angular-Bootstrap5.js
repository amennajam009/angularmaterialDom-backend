const {SelectedVariable , testingComponentVariable } = require('../modal/Create-Angular-Bootstrap5')


const SaveSelectedVariable = async (req,res) =>{
    try {
        const {variable1,variable2,variable3,variable4,
              variable5,variable6,variable7,variable8,variable9} = req.body;
              
        const MappingData = new SelectedVariable({
            variable1,variable2,variable3,variable4,
              variable5,variable6,variable7,variable8,variable9
        })  
        const DataToSave = await MappingData.save()
        res.json({
            message:'Api Works',
            Result:DataToSave,
            Data:true
        })    
    } catch (error) {
           res.json({
            message:error.message,
            Result:null,
            Data:false
           })
    }
}

const SaveTestingComponent = async (req,res) =>{
    try {
        const {variable1,variable2,variable3,variable4,
            variable5,variable6} = req.body;

        const MappingData = new testingComponentVariable({
             variable1,variable2,variable3,variable4,
            variable5,variable6
        }) ;
        const DataToSave = await MappingData.save()
        res.json({
            message:"Api Works",
            data:true,
            result:DataToSave
        })   
    } catch (error) {
        res.json({
            message:error.message,
            data:false,
            result:null
        })
    }
}


const getSelectedVariable = async (req,res) =>{
    try {
        const getData = await SelectedVariable.find()
        res.json({
            data:getData
        })
    } catch (error) {
        res.json({
            data:null
        })
    }
}



module.exports = {
    SaveSelectedVariable,
    SaveTestingComponent,
    getSelectedVariable
}