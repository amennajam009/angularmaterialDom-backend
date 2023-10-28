

const materialDropDownVariable = async (req,res) =>{
    try {
      const materialVariables = {
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
             {id:1,variable:"Opt for Opportunities"},
             {id:2,variable:"Choices Unlimited"},
             {id:3,variable:"Variety Voyage"},
             {id:4,variable:"Explore and Select"},
             {id:5,variable:"Preferences Palette"},
           ],
           variable7:[
             {id:1,variable:"Flavor Finder"},
             {id:2,variable:"Select a Value"},
             {id:3,variable:"Preference"},
             {id:4,variable:"Decision Maker"},
             {id:5,variable:"Options Menu"},
           ],
           variable8:[
             {id:1,variable:"Options Menu"},
             {id:2,variable:"Decision Maker"},
             {id:3,variable:"Preference"},
             {id:4,variable:"Select a Value"},
             {id:5,variable:"Flavor Finder"},
           ],
           variable9:[
             {id:1,variable:"Flavor Selector"},
             {id:2,variable:"Decision Dilemma"},
             {id:3,variable:"Choice Chronicle"},
             {id:4,variable:"Preference Playground"},
             {id:5,variable:"Options Odyssey"},
           ],     
         }
      }  
      res.json({
        message:'Api works',
        data:true,
        result:materialVariables
      })    
    } catch (error) {
        res.json({
            message:error.message,
            data:false,
            result:null
        })
    }
} 


module.exports={
    materialDropDownVariable
}