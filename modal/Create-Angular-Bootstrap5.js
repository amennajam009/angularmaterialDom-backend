const mongoose = require('mongoose');

const SelectedVariable = mongoose.Schema({
variable1: { type: String, required: true },
variable2:  { type: String, required: true},
variable3:     { type: Number,  required: true},           
variable4:     { type: String, required: true},
variable5:     { type: String, required: true},
variable6:     { type: String, required: true},
variable7:     { type: String, required: true},
variable8:     { type: String, required: true},
variable9:     { type: String, required: true},
})




module.exports = mongoose.model('SelectedVariable', SelectedVariable);