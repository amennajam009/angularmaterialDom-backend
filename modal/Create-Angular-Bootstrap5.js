const mongoose = require('mongoose');

const SelectedVariable = mongoose.Schema({
variable1: { type: String, required: true },
variable2:  { type: String, required: true},
variable3:     { type: String,  required: true},           
variable4:     { type: String, required: true},
variable5:     { type: String, required: true},
variable6:     { type: String, required: true},
variable7:     { type: String, required: true},
variable8:     { type: String, required: true},
variable9:     { type: String, required: true},
})


const testingComponentVariable = mongoose.Schema({
    variable1: { type: String, required: true },
    variable2:  { type: String, required: true},
    variable3:     { type: String,  required: true},           
    variable4:     { type: String, required: true},
    variable5:     { type: String, required: true},
    variable6:     { type: String, required: true},
    })
    

module.exports = mongoose.model('SelectedVariable', SelectedVariable);




module.exports = {
    SelectedVariable: mongoose.model('SelectedVariable', SelectedVariable),
    testingComponentVariable: mongoose.model('testingComponentVariable', testingComponentVariable)  
  };