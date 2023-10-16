
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
                {id:1,variable:"Decision Depot"},
                {id:2,variable:"Pick-a-Perk"},
                {id:3,variable:"Choice Carousel"},
                {id:4,variable:"Decision Dynamo"},
                {id:5,variable:"Variety Vortex"},
              ],
              variable3:[
                {id:1,variable:"Selector's Paradise"},
                {id:2,variable:"Choose & Cherish"},
                {id:3,variable:"Decision Directory"},
                {id:4,variable:"Taste of Options"},
                {id:5,variable:"Decision Domain"},
              ],
              variable4:[
                {id:1,variable:"Options Overlook"},
                {id:2,variable:"Taste of Optionsoption2"},
                {id:3,variable:"Choose & Cherish"},
                {id:4,variable:"Selector's Paradise"},
                {id:5,variable:"Variety Vortex"},
              ],
              variable5:[
                {id:1,variable:"Choice Catalog"},
                {id:2,variable:"Selection Spectrum"},
                {id:3,variable:"Decision Destination"},
                {id:4,variable:"Choose & Cherish"},
                {id:5,variable:"Options Overlook"},
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



