
// In this Api i'm only getting the variables 
const SendDropDownVariables = async (req,res) =>{
    try {
        const MyVariabels = {
            data: {
               variable1:[
                {id:1,variable:"Preference Picker"},
                {id:2,variable:"Choice Chamber"},
                {id:3,variable:"Flavorful Selections"},
                {id:4,variable:"Decision Delight"},
                {id:5,variable:"Item Explorer"},
               ] ,
              variable2:[
                {id:1,variable:"option1"},
                {id:2,variable:"option2"},
                {id:3,variable:"option3"},
                {id:4,variable:"option4"},
                {id:5,variable:"option5"},
              ],
              variable3:[
                {id:1,variable:"option1"},
                {id:2,variable:"option2"},
                {id:3,variable:"option3"},
                {id:4,variable:"option4"},
                {id:5,variable:"option5"},
              ],
              variable4:[
                {id:1,variable:"option1"},
                {id:2,variable:"option2"},
                {id:3,variable:"option3"},
                {id:4,variable:"option4"},
                {id:5,variable:"option5"},
              ],
              variable5:[
                {id:1,variable:"option1"},
                {id:2,variable:"option2"},
                {id:3,variable:"option3"},
                {id:4,variable:"option4"},
                {id:5,variable:"option5"},
              ],
              variable6:[
                {id:1,variable:"option1"},
                {id:2,variable:"option2"},
                {id:3,variable:"option3"},
                {id:4,variable:"option4"},
                {id:5,variable:"option5"},
              ],
              variable7:[
                {id:1,variable:"option1"},
                {id:2,variable:"option2"},
                {id:3,variable:"option3"},
                {id:4,variable:"option4"},
                {id:5,variable:"option5"},
              ],
              variable8:[
                {id:1,variable:"option1"},
                {id:2,variable:"option2"},
                {id:3,variable:"option3"},
                {id:4,variable:"option4"},
                {id:5,variable:"option5"},
              ],
              variable9:[
                {id:1,variable:"option1"},
                {id:2,variable:"option2"},
                {id:3,variable:"option3"},
                {id:4,variable:"option4"},
                {id:5,variable:"option5"},
              ],     
            }
        }
        res.json({
            data:MyVariabels
        })
    } catch (error) {
        res.json({
            message:error.message,
            data:null
        })
    }
}

module.exports = {
    SendDropDownVariables
}



