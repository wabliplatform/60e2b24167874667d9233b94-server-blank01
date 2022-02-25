
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myprojectsSchema = new Schema({
Underscoreid:String , 
ptitle:String 

})



module.exports = {
  Myprojects : mongoose.model('myprojects', myprojectsSchema),
}

