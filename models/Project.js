
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 
ptitle:String 

})



module.exports = {
  Project : mongoose.model('project', projectSchema),
}

