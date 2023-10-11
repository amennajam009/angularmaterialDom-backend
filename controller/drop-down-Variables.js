
// In this Api i'm only getting the variables 
const SendDropDownVariables = async (req,res) =>{
    try {
        const MyObject = {
            object1:{
                id:1,
                variable:"TestingVar1"
            },
            object2:{
                id:2,
                variable:"TestingVar2"
            },
            object3:{
                id:3,
                variable:"TestingVar3"
            }
        }
        res.json({
            data:MyObject
        })
    } catch (error) {
        res.json({
            message:error.message,
            data:null,

        })
    }
}

module.exports = {
    SendDropDownVariables
}



